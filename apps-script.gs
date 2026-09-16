// --- Setup ---
// 1. Create a Google Sheet (any name), e.g. "CSA Forest Survey — Shared Data".
// 2. Extensions > Apps Script. Delete the default code and paste this whole file.
// 3. Click Deploy > New deployment > select type "Web app".
//      - Execute as: Me
//      - Who has access: Anyone
// 4. Click Deploy, authorize the permissions it asks for, then copy the
//    "Web app URL" it gives you (ends in /exec).
// 5. Paste that URL into the Settings panel of the CSA Field Data app on
//    each iPad, once, over wifi.
//
// Anyone with this URL can add rows to the sheet — fine for a low-stakes
// class dataset, but don't post the URL somewhere public.
//
// --- Multi-device merge behavior ---
// Records are matched by Plot ID + Date. When a second (third, etc.) upload
// arrives for a plot already in the sheet, its data is MERGED into that
// existing row rather than added as a new row — each upload fills in
// whatever was still blank. If two uploads genuinely disagree on the same
// field (e.g. two different CBH values for the same tag number), the
// original value is kept and the disagreement is written to the
// "conflicts" column instead of being silently overwritten. Identical
// duplicate entries (e.g. two iPads both logging the same tree the same
// way) are quietly deduplicated, not flagged.

const HEADERS = [
  "plotID", "date", "observers", "startTime", "lat", "lon",
  "totalCanopy", "avgQuadratCanopy",
  "adultTrees", "juvenileTrees", "quadrats", "rapidAssessment", "unknownSpecimens",
  "notes", "savedAt", "conflicts"
];
const JSON_FIELDS = ["adultTrees", "juvenileTrees", "quadrats", "rapidAssessment", "unknownSpecimens", "conflicts"];
const SHEET_NAME = "Plots";
const QUADRAT_KEYS = ["NW", "NE", "SW", "SE", "Center"];

function getSheet_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) sheet = ss.insertSheet(SHEET_NAME);
  if (sheet.getLastRow() === 0) sheet.appendRow(HEADERS);
  return sheet;
}

function rowToRecord_(headerRow, row) {
  const obj = {};
  headerRow.forEach((h, i) => { obj[h] = row[i]; });
  JSON_FIELDS.forEach((k) => {
    try { obj[k] = obj[k] ? JSON.parse(obj[k]) : (k === "quadrats" ? {} : []); }
    catch (err) { obj[k] = k === "quadrats" ? {} : []; }
  });
  return obj;
}

function recordToRow_(rec) {
  return HEADERS.map((h) => {
    const v = rec[h];
    if (v === undefined || v === null) return "";
    return typeof v === "object" ? JSON.stringify(v) : v;
  });
}

// ---------- Merge helpers ----------
function mergeScalar_(existing, incoming, label, conflicts) {
  const e = (existing === undefined || existing === null) ? "" : String(existing);
  const inc = (incoming === undefined || incoming === null) ? "" : String(incoming);
  if (e === "") return inc;
  if (inc === "") return e;
  if (e !== inc) {
    conflicts.push(label + ": \"" + e + "\" vs \"" + inc + "\"");
    return e; // keep first-recorded value; the disagreement is flagged instead
  }
  return e;
}

function mergeArrayByKey_(existingArr, incomingArr, keyField, otherFields, label, conflicts) {
  existingArr = existingArr || [];
  incomingArr = incomingArr || [];
  const map = {};
  const order = [];
  existingArr.forEach((item) => {
    const k = item[keyField] || ("_untagged_" + Utilities.getUuid());
    map[k] = item;
    order.push(k);
  });
  incomingArr.forEach((item) => {
    const k = item[keyField] || ("_untagged_" + Utilities.getUuid());
    if (map[k]) {
      const rowConflicts = [];
      otherFields.forEach((f) => {
        const merged = mergeScalar_(map[k][f], item[f], label + " \"" + k + "\" — " + f, rowConflicts);
        map[k][f] = merged;
      });
      rowConflicts.forEach((c) => conflicts.push(c));
    } else {
      map[k] = item;
      order.push(k);
    }
  });
  return order.map((k) => map[k]);
}

function mergeStringArray_(existingArr, incomingArr) {
  const set = {};
  (existingArr || []).concat(incomingArr || []).forEach((s) => { if (s) set[s] = true; });
  return Object.keys(set);
}

function mergeQuadrats_(existingQ, incomingQ, conflicts) {
  existingQ = existingQ || {};
  incomingQ = incomingQ || {};
  const out = {};
  QUADRAT_KEYS.forEach((k) => {
    const e = existingQ[k] || {};
    const inc = incomingQ[k] || {};
    out[k] = {
      canopy: mergeScalar_(e.canopy, inc.canopy, "Quadrat " + k + " canopy %", conflicts),
      cwd: mergeScalar_(e.cwd, inc.cwd, "Quadrat " + k + " CWD %", conflicts),
      bare: mergeScalar_(e.bare, inc.bare, "Quadrat " + k + " bare soil %", conflicts),
      dist: mergeScalar_(e.dist, inc.dist, "Quadrat " + k + " dist. to road/building", conflicts),
      unk: mergeScalar_(e.unk, inc.unk, "Quadrat " + k + " unknown collected", conflicts),
      lat: mergeScalar_(e.lat, inc.lat, "Quadrat " + k + " GPS lat", conflicts),
      lon: mergeScalar_(e.lon, inc.lon, "Quadrat " + k + " GPS lon", conflicts),
      species: mergeArrayByKey_(e.species, inc.species, "name", ["count"], "Quadrat " + k + " species", conflicts),
    };
  });
  return out;
}

function computeAvgCanopy_(quadrats) {
  const vals = [];
  QUADRAT_KEYS.forEach((k) => {
    const v = parseFloat((quadrats[k] || {}).canopy);
    if (!isNaN(v)) vals.push(v);
  });
  if (vals.length === 0) return "";
  const avg = vals.reduce((a, b) => a + b, 0) / vals.length;
  return avg.toFixed(1) + "% (" + vals.length + "/5 entered)";
}

function mergeRecord_(existing, incoming) {
  const conflicts = (existing.conflicts || []).slice();
  const merged = {
    plotID: existing.plotID,
    date: existing.date,
    observers: mergeScalar_(existing.observers, incoming.observers, "Observers", conflicts),
    startTime: mergeScalar_(existing.startTime, incoming.startTime, "Start time", conflicts),
    lat: mergeScalar_(existing.lat, incoming.lat, "Plot GPS lat", conflicts),
    lon: mergeScalar_(existing.lon, incoming.lon, "Plot GPS lon", conflicts),
    totalCanopy: mergeScalar_(existing.totalCanopy, incoming.totalCanopy, "Total canopy %", conflicts),
    adultTrees: mergeArrayByKey_(existing.adultTrees, incoming.adultTrees, "tag",
      ["species", "cbh", "canopyHt", "newTag", "oldTag", "dead", "notes"], "Adult tree tag", conflicts),
    juvenileTrees: mergeArrayByKey_(existing.juvenileTrees, incoming.juvenileTrees, "species",
      ["total"], "Juvenile species", conflicts),
    rapidAssessment: mergeStringArray_(existing.rapidAssessment, incoming.rapidAssessment),
    unknownSpecimens: mergeArrayByKey_(existing.unknownSpecimens, incoming.unknownSpecimens, "name",
      ["location", "description", "collected"], "Unknown specimen", conflicts),
    savedAt: incoming.savedAt || existing.savedAt,
  };
  merged.quadrats = mergeQuadrats_(existing.quadrats, incoming.quadrats, conflicts);
  merged.avgQuadratCanopy = computeAvgCanopy_(merged.quadrats);

  const existingNotes = existing.notes || "";
  const incomingNotes = incoming.notes || "";
  merged.notes = (incomingNotes && incomingNotes !== existingNotes)
    ? (existingNotes ? existingNotes + "\n---\n" + incomingNotes : incomingNotes)
    : existingNotes;

  merged.conflicts = conflicts;
  return merged;
}

// ---------- Web app entry points ----------
function doPost(e) {
  const sheet = getSheet_();
  const data = JSON.parse(e.postData.contents);
  const incomingRecords = Array.isArray(data) ? data : [data];

  const range = sheet.getDataRange();
  const values = range.getValues();
  const headerRow = values[0];

  incomingRecords.forEach((incoming) => {
    let matchRowIndex = -1;
    for (let r = 1; r < values.length; r++) {
      if (String(values[r][0]) === String(incoming.plotID) && String(values[r][1]) === String(incoming.date)) {
        matchRowIndex = r;
        break;
      }
    }
    if (matchRowIndex === -1) {
      const fresh = Object.assign({ conflicts: [] }, incoming);
      const newRow = recordToRow_(fresh);
      sheet.appendRow(newRow);
      values.push(newRow);
    } else {
      const existing = rowToRecord_(headerRow, values[matchRowIndex]);
      const merged = mergeRecord_(existing, incoming);
      const newRow = recordToRow_(merged);
      sheet.getRange(matchRowIndex + 1, 1, 1, newRow.length).setValues([newRow]);
      values[matchRowIndex] = newRow;
    }
  });

  return ContentService
    .createTextOutput(JSON.stringify({ status: "ok", count: incomingRecords.length }))
    .setMimeType(ContentService.MimeType.JSON);
}

function doGet(e) {
  const sheet = getSheet_();
  const rows = sheet.getDataRange().getValues();
  const headerRow = rows[0];
  const dataRows = rows.slice(1);

  const out = dataRows
    .filter((row) => row.some((cell) => cell !== ""))
    .map((row) => rowToRecord_(headerRow, row));

  return ContentService
    .createTextOutput(JSON.stringify(out))
    .setMimeType(ContentService.MimeType.JSON);
}

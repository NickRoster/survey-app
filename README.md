# CSA Forest Survey — Field Data App (PWA)

An installable, fully offline field data tool for the CSA beech-maple forest
follow-up study. Runs on iPad minis, works with zero connectivity in the
field, and syncs to a shared Google Sheet once you're back on wifi.

## Part 1 — Host it on GitHub Pages (free, ~10 minutes)

1. Create a GitHub account if you don't have one: https://github.com/join
2. Create a new repository — e.g. `csa-field-app`. Public is fine (no
   private student data lives in this repo, just the app itself).
3. Upload these five files to the repo (drag-and-drop works on
   github.com — "Add file" → "Upload files"):
   - `index.html`
   - `manifest.json`
   - `sw.js`
   - `icon-192.png`
   - `icon-512.png`
   (Keep `apps-script.gs` aside — that one goes into Google Apps Script in
   Part 2, not GitHub.)
4. Go to the repo's **Settings → Pages**. Under "Build and deployment",
   set Source to "Deploy from a branch", branch `main`, folder `/ (root)`.
   Save.
5. After a minute or two, GitHub will show your live URL, something like:
   `https://yourusername.github.io/csa-field-app/`

## Part 2 — Set up the shared database (Google Sheet)

1. Create a new Google Sheet — e.g. "CSA Forest Survey — Shared Data".
2. Go to **Extensions → Apps Script**. Delete the placeholder code and
   paste in the full contents of `apps-script.gs`.
3. Click **Deploy → New deployment**. Choose type **Web app**.
   - Execute as: **Me**
   - Who has access: **Anyone**
4. Click **Deploy**, then approve the permissions Google asks for.
5. Copy the **Web app URL** it gives you (ends in `/exec`). This is your
   shared database address.

Anyone with this URL can add rows — fine for a low-stakes class dataset,
but don't post it somewhere public.

## Part 3 — Install on each iPad

1. On the iPad, open Safari and go to your GitHub Pages URL.
2. Tap the **Share** button → **Add to Home Screen**. This gives it a real
   icon and opens it full-screen, like an installed app.
3. Open the installed app once *while still on wifi*, so the service
   worker can cache everything needed to run fully offline afterward.
4. Open **Settings** (bottom of the app) and paste in the Google Apps
   Script URL from Part 2. Tap **Save URL**. This only needs to happen
   once per iPad.

## Using it in the field

- Fill in plots and tap **Save plot record** as normal — data is written
  to the iPad's on-device storage immediately, so closing the app,
  restarting the iPad, or losing the tab does **not** lose saved records.
- The **Online / Offline** indicator in the top-right shows connection
  status at a glance.
- **⬇ Backup (.json)** and **⬇ Export (.csv)** work with zero connectivity
  and are good habits to use as an extra safety net.

## Back at the lab

1. Get on wifi.
2. Open **Shared Database** → **Upload session to shared DB**. This sends
   only the not-yet-synced plots from that device.
3. Tap **Load shared database** to pull everyone's combined records and
   download a master CSV.
4. The Google Sheet itself also fills up automatically — you can open it
   directly any time to see the raw incoming data.

## Updating the app later

If you edit `index.html` (or any file) and re-upload it to GitHub, the
service worker will pick up the new version the next time each iPad has
wifi and reopens the app.

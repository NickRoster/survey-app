// Original (2009) adult tree tag data, transcribed from the baseline study's
// printed plot tables. Used by index.html to let a student pick a Plot ID
// and see the historical tag/species list for cross-reference while
// re-measuring. This file is cached by the service worker for offline use.
//
// Corrected against the original scan by the instructor (Sept 2026) — fixed a
// K31/L48 page-break misattribution and a missing S33 row. Total: 745 adult
// trees across 30 plots, matching the original study's reported count.
//
// cbh/height are kept as strings exactly as printed (some are multi-stem
// sums like "78+61+81" for a single tagged individual with multiple stems).

const ORIGINAL_TREE_DATA = {
"A12": [
["679","Sugar Maple","22","6"],["680","Sugar Maple","56","11"],["681","Sugar Maple","36","8"],
["682","Eastern Hemlock","30","3"],["683","Eastern Hemlock","29","3"],["684","Sugar Maple","78","18"],
["685","Eastern Hemlock","59","6"],["686","American Beech","70","16"],["687","Sugar Maple","33","7"],
["688","Sugar Maple","50","14"],["689","American Beech","38","7"],["690","Eastern Hemlock","36","3"],
["691","American Beech","19","5"],["692","American Beech","45","9"],["693","Sugar Maple","181","17"],
["694","American Beech","17","5"],["695","American Beech","47","10"],["696","Sugar Maple","15","5"],
["697","American Beech","22","5"],["698","Eastern Hemlock","50","3"],["699","Red Oak","99","21"],
["700","Sugar Maple","20","4"],["701","Eastern Hemlock","35","4"],["702","Sugar Maple","82","18"],
["703","American Beech","15","3"],["704","American Beech","37","12"],["705","American Beech","121","18"],
["706","Sugar Maple","20","8"],["707","Sugar Maple","22","9"],["708","Eastern Hemlock","50","6"],
["709","Eastern Hemlock","45","7"],["710","Eastern Hemlock","49","5"],["711","Sugar Maple","36","11"],
["712","Red Oak","38","8"],["713","Eastern Hemlock","47","4"],["714","Sugar Maple","173","19"],
["715","Sugar Maple","36","12"],["716","Eastern Hemlock","16","3"],["717","Sugar Maple","48","17"],
["718","Sugar Maple","50","16"],["719","Eastern Hemlock","74","8"]
],
"A13": [
["495","Sugar Maple","35","4"],["496","Eastern Hemlock","41","4"],["497","Sugar Maple","38","6"],
["498","Sugar Maple","51","8"],["499","Sugar Maple","24","6"],["500","Sugar Maple","38","5"],
["501","Sugar Maple","42","7"],["502","Sugar Maple","38","6"],["503","Sugar Maple","34","5"],
["504","Sugar Maple","78","15"],["505","Sugar Maple","36","6"],["506","Eastern Hemlock","48+31","5"],
["507","Eastern Hemlock","48","5"],["508","Sugar Maple","19","3"],["509","Sugar Maple","29","3"],
["510","Sugar Maple","37","4"],["511","Eastern Hemlock","32","3"],["512","Eastern Hemlock","33","3"],
["513","Sugar Maple","47","7"],["514","Sugar Maple","17","3"],["515","Eastern Hemlock","28","3"],
["516","Eastern Hemlock","40","3"],["517","Red Oak","116+195","15"],["518","Sugar Maple","59","10"],
["519","Sugar Maple","36","4"],["520","Eastern Hemlock","27","3"],["521","Sugar Maple","28","3"],
["522","Sugar Maple","16","3"],["523","Sugar Maple","118","14"],["524","Eastern Hemlock","47","3"],
["525","Sugar Maple","28","5"],["526","Eastern Hemlock","37","3"],["527","Red Oak","157","14"],
["528","Sugar Maple","30","4"],["529","Sugar Maple","18","4"],["530","Eastern Hemlock","30","2"],
["531","Yellow Birch","96","15"],["532","Sugar Maple","28","5"],["533","Yellow Birch","61","10"],
["534","Sugar Maple","40","6"],["535","Sugar Maple","29","5"],["536","Sugar Maple","34","6"],
["537","Sugar Maple","41","8"],["538","Sugar Maple","36","7"],["539","Eastern Hemlock","37","4"],
["540","Eastern Hemlock","43","4"],["541","Sugar Maple","99","16"],["542","Eastern Hemlock","24","3"],
["543","Eastern Hemlock","22","3"],["544","Pink Cherry","34+55","6"],["545","Sugar Maple","41","9"],
["546","American Beech","98","15"],["547","Sugar Maple","81","15"],["548","Sugar Maple","126","51"],
["549","Eastern Hemlock","17+13","3"],["550","Sugar Maple","22","6"],["551","Eastern Hemlock","30","3"],
["552","Eastern Hemlock","24","3"],["553","Yellow Birch","95","12"],["554","Sugar Maple","37","7"],
["555","Eastern Hemlock","36","6"],["556","Sugar Maple","37","6"],["557","Yellow Birch","121","18"],
["558","Eastern Hemlock","48","7"]
],
"A21": [
["173","American Beech","101","17"],["174","American Beech","30","9"],["175","American Beech","37","11"],
["176","American Beech","56","14"],["177","Yellow Birch","114","17"],["178","American Beech","28","7"],
["179","American Beech","38","12"],["180","Sugar Maple","51","11"],["181","American Beech","17","5"],
["182","American Beech","17","3"],["183","American Beech","159","22"],["184","American Beech","32","5"],
["185","American Beech","67","16"],["186","American Beech","100","19"],["187","American Beech","45","7"],
["188","Sugar Maple","62","13"],["189","American Beech","93","14"],["190","American Beech","22","3"],
["191","American Beech","58","11"],["192","American Beech","21","4"],["193","American Beech","59","15"],
["194","Red Oak","91","20"],["195","Sugar Maple","109","21"],["196","American Beech","20","3"],
["197","American Beech","16","4"],["198","Sugar Maple","139","22"],["199","American Beech","136","23"]
],
"A22": [
["647","Sugar Maple","78+61+81","16"],["648","Sugar Maple","35","12"],["649","Sugar Maple","57","12"],
["650","Black Cherry","116+129","21"],["651","Sugar Maple","20","5"],["652","Sugar Maple","57","16"],
["653","Sugar Maple","44","15"],["654","Sugar Maple","58","16"],["655","Black Cherry","133","20"],
["656","Sugar Maple","49","15"],["657","Black Cherry","133","21"],["658","Sugar Maple","96","17"],
["659","Sugar Maple","95","20"],["660","Sugar Maple","44","16"],["661","Sugar Maple","105","21"],
["662","Iron Wood","31","11"],["663","Sugar Maple","109","20"],["664","Sugar Maple","22","5"],
["665","Sugar Maple","96","20"],["666","Sugar Maple","27","15"],["667","Sugar Maple","101","19"],
["668","Sugar Maple","26","8"],["669","Sugar Maple","33","13"],["670","Sugar Maple","29","5"],
["671","Sugar Maple","75","18"],["672","Sugar Maple","16","3"],["673","Sugar Maple","39","15"],
["674","Black Cherry","154","23"],["675","Black Cherry","86","21"],["676","Sugar Maple","66","18"],
["677","Sugar Maple","38","12"],["678","Black Cherry","77","21"]
],
"B22": [
["475","Sugar Maple","99","16"],["476","Black Cherry","110","17"],["477","Sugar Maple","70","16"],
["478","Black Cherry","131","19"],["479","Sugar Maple","58","16"],["480","Black Cherry","115","22"],
["481","White Ash","106","21"],["482","Sugar Maple","78","17"],["483","Iron Wood","60","15"],
["484","White Ash","112+106","20"],["485","Sugar Maple","149","20"],["486","Sugar Maple","58","16"],
["487","Sugar Maple","49","15"],["488","Sugar Maple","52","15"],["489","Sugar Maple","89","18"],
["490","Sugar Maple","50","15"],["491","Sugar Maple","43","10"],["492","Sugar Maple","58","16"],
["493","Sugar Maple","101","21"],["494","Iron Wood","60","14"]
],
"B25": [
["204","White Ash","25","4"],["205","Sugar Maple","31","4"],["206","Sugar Maple","66","12"],
["207","Iron Wood","90","18"],["208","Sugar Maple","91","18"],["209","Black Cherry","137","26"],
["210","Sugar Maple","23","5"],["211","White Ash","29","8"],["212","Sugar Maple","22","5"],
["213","Sugar Maple","60","12"],["214","White Ash","132","26"],["215","Sugar Maple","73","18"],
["216","Black Cherry","51","13"],["217","American Beech","63","17"],["218","Sugar Maple","114","20"],
["219","White Ash","21","4"],["220","White Ash","27","3"],["221","Sugar Maple","17","5"],
["222","Sugar Maple","22","5"],["223","Sugar Maple","20","5"]
],
"C36": [
["157","Sugar Maple","181","14"],["158","American Beech","52","15"],["159","American Beech","43","13"],
["160","American Beech","146","25"],["161","Black Cherry","169","23"],["162","Sugar Maple","22","8"],
["163","Sugar Maple","37","14"],["164","Sugar Maple","44","14"],["165","Sugar Maple","69","15"],
["166","Yellow Birch","113","21"],["167","American Beech","77","14"],["168","Sugar Maple","216","28"],
["169","American Beech","175+40","26"],["170","American Beech","25","11"],["171","American Beech","192","24"],
["172","Sugar Maple","19","7"]
],
"C41": [
["141","Sugar Maple","82","14"],["142","Eastern Hemlock","53","10"],["143","American Beech","208","28"],
["144","American Beech","19","6"],["145","American Beech","197","25"],["146","American Beech","18","4"],
["147","American Beech","162","22"],["148","American Beech","134","22"],["149","Sugar Maple","34","11"],
["150","American Beech","145","22"],["151","American Beech","71","17"],["152","Sugar Maple","24","8"],
["153","American Beech","86","14"],["154","American Beech","164","22"],["155","Viburnum","21","4"]
],
"F31": [
["374","Sugar Maple","46","8"],["375","Sugar Maple","189","22"],["376","American Beech","23","5"],
["377","Sugar Maple","22","8"],["378","American Beech","39","7"],["379","American Beech","151","21"],
["380","Black Cherry","129","24"],["381","American Beech","129","20"],["382","Sugar Maple","67","17"],
["383","Sugar Maple","104","21"],["384","Sugar Maple","32","5"],["385","Sugar Maple","87","18"],
["386","Sugar Maple","25","6"],["387","Sugar Maple","131","22"]
],
"J47": [
["388","Sugar Maple","82","14"],["389","Sugar Maple","90","14"],["390","Sugar Maple","40","11"],
["391","Sugar Maple","35","9"],["392","Eastern Hemlock","134","15"],["393","Sugar Maple","38","8"],
["394","Sugar Maple","40","8"],["395","Sugar Maple","119","17"],["396","Sugar Maple","61","12"],
["397","Eastern Hemlock","111","12"],["398","Sugar Maple","135","19"],["399","Sugar Maple","24","7"],
["400","Sugar Maple","17","5"],["200","Sugar Maple","62","15"],["201","Sugar Maple","111","18"],
["202","American Beech","122","17"],["203","Eastern Hemlock","192","20"]
],
"K31": [
["301","White Ash","70","17"],["302","American Beech","53","15"],["303","American Beech","69","19"],
["304","Sugar Maple","32","13"],["305","American Beech","89","19"],["306","Black Cherry","153","25"],
["307","White Ash","145","22"],["308","Eastern Hemlock","78","12"],["309","American Beech","98","19"],
["310","White Ash","104","22"],["311","American Beech","88","19"],["312","Sugar Maple","113","22"],
["313","White Ash","156","24"],["314","Sugar Maple","126","21"],["315","American Beech","87","19"],
["316","American Beech","76","18"],["317","American Beech","117","21"],["318","American Beech","83","20"],
["319","Sugar Maple","19","7"],["320","American Beech","117","20"],["321","Eastern Hemlock","55","6"],
["322","Eastern Hemlock","52","6"],["323","Eastern Hemlock","41","5"],["324","American Beech","58","15"],
["325","Sugar Maple","45","15"],["326","White Ash","204","25"],["327","Sugar Maple","89","20"],
["328","Eastern Hemlock","118","18"],["329","Black Cherry","134","24"],["330","Eastern Hemlock","83","16"],
["331","Sugar Maple","99","19"]
],
"L48": [
["116","Sugar Maple","129","20"],["117","American Beech","76","20"],["118","American Beech","175","23"],
["119","American Beech","45","14"],["120","Sugar Maple","60","14"],["121","Black Cherry","46","15"],
["122","Eastern Hemlock","63","11"],["123","White Ash","54","11"],["124","Eastern Hemlock","157","18"],
["125","Sugar Maple","25","8"],["126","Eastern Hemlock","101","14"],["127","Sugar Maple","17","6"],
["128","Eastern Hemlock","188","23"],["129","Sugar Maple","47","12"],["130","American Beech","141","19"],
["131","Eastern Hemlock","99","24"],["132","Yellow Birch","128","20"],["133","Sugar Maple","50","13"],
["134","Sugar Maple","87","14"],["135","Eastern Hemlock","113","16"],["136","Red Oak","157","27"],
["137","American Beech","98","20"],["138","Eastern Hemlock","99","17"],["139","White Ash","21","3"],
["140","Sugar Maple","89","17"]
],
"M13": [
["402","Red Oak","89","17"],["403","Sugar Maple","119","21"],["404","Black Cherry","23","6"],
["405","White Ash","117","20"],["406","Sugar Maple","20","16"],["407","American Beech","77","18"],
["408","Sugar Maple","17","5"],["409","American Beech","91","20"],["410","American Beech","26","7"],
["411","American Beech","30","7"],["412","American Beech","87","18"],["413","Eastern Hemlock","122","17"],
["414","Sugar Maple","15","2"],["415","White Ash","80","19"],["416","Sugar Maple","97","18"],
["417","Sugar Maple","75","16"],["418","Sugar Maple","49","16"],["419","Sugar Maple","18","5"],
["420","Sugar Maple","23","7"],["421","White Ash","66","16"],["422","Sugar Maple","81","15"],
["423","Iron Wood","25","8"],["424","Iron Wood","48","16"],["425","American Beech","65","18"],
["426","American Beech","76","18"],["427","American Beech","19","5"],["428","Sugar Maple","62","16"],
["429","American Beech","78","21"],["430","Sugar Maple","85","18"],["431","Yellow Birch","39","13"],
["432","American Beech","90","20"],["433","American Beech","32","6"],["434","American Beech","28","4"],
["435","American Beech","37","4"],["436","Sugar Maple","37","7"],["437","Eastern Hemlock","58","7"],
["438","American Beech","28","7"],["439","American Beech","54","15"],["440","American Beech","55","15"],
["441","Yellow Birch","89","21"],["442","Iron Wood","35","14"],["443","Sugar Maple","20","5"],
["444","Sugar Maple","52","15"],["445","Sugar Maple","25","6"]
],
"N38": [
["446","Eastern Hemlock","56","13"],["447","Sugar Maple","62","17"],["448","Yellow Birch","74","17"],
["449","Eastern Hemlock","45","7"],["450","Black Cherry","95","22"],["451","Sugar Maple","56","15"],
["452","Eastern Hemlock","43","3"],["453","Eastern Hemlock","78","11"],["454","Eastern Hemlock","22","2"],
["455","Black Cherry","113","24"],["456","Eastern Hemlock","43","4"],["457","Eastern Hemlock","19","2"],
["458","Eastern Hemlock","44","4"],["459","Eastern Hemlock","29","2"],["460","American Beech","33","13"],
["461","Sugar Maple","37","10"],["462","American Beech","18","3"],["463","Sugar Maple","53","15"],
["464","Yellow Birch","110","21"],["465","Sugar Maple","80+133","22"],["466","Sugar Maple","105","19"],
["467","American Beech","37","8"],["468","Sugar Maple","32","8"],["469","Sugar Maple","122","23"],
["470","American Beech","27","5"],["471","Sugar Maple","58","17"],["472","American Basswood","76","20"],
["473","Sugar Maple","96","20"],["474","Sugar Maple","30","10"]
],
"N41": [
["100","Eastern Hemlock","56","10"],["101","Sugar Maple","41","15"],["102","Sugar Maple","68","18"],
["103","White Ash","141","24"],["104","Eastern Hemlock","61","12"],["105","American Beech","22","7"],
["106","Red Elder Berry","19","4"],["107","Black Cherry","113","26"],["108","American Beech","16","4"],
["109","Sugar Maple","76","18"],["110","Sugar Maple","56","16"],["111","American Beech","15","4"],
["112","Sugar Maple","103","21"],["113","American Beech","17","5"],["114","American Beech","151","23"],
["115","Sugar Maple","126","22"]
],
"O39": [
["586","American Beech","26","6"],["587","Sugar Maple","31","5"],["588","Eastern Hemlock","66","7"],
["589","White Ash","73","21"],["590","Sugar Maple","48","16"],["591","Sugar Maple","40","15"],
["592","Sugar Maple","55","16"],["593","Sugar Maple","41","15"],["594","Eastern Hemlock","61","7"],
["595","Sugar Maple","142","21"],["596","Eastern Hemlock","48","6"],["597","Sugar Maple","47","9"],
["598","American Beech","22","6"],["599","Eastern Hemlock","24","3"],["600","American Basswood","186","20"],
["601","Black Cherry","149","20"],["602","Sugar Maple","147","22"],["603","Sugar Maple","46","17"],
["604","Eastern Hemlock","22","3"],["605","Sugar Maple","46","11"],["606","Sugar Maple","89","19"],
["607","Eastern Hemlock","112","17"],["608","Eastern Hemlock","56","13"],["609","Eastern Hemlock","84","13"],
["610","Sugar Maple","97+138","21"],["611","Black Cherry","125","22"],["612","White Ash","137","23"]
],
"P14": [
["71","Sugar Maple","48","12"],["72","Sugar Maple","25","10"],["73","Sugar Maple","63","10"],
["74","Sugar Maple","137","21"],["75","Sugar Maple","19","4"],["76","Sugar Maple","37","10"],
["77","American Beech","34","10"],["78","American Beech","168","21"],["79","Sugar Maple","22","5"],
["80","American Beech","20","6"],["81","Sugar Maple","31","14"],["82","Sugar Maple","83","20"],
["83","Sugar Maple","22","6"],["84","Sugar Maple","94","21"],["85","Sugar Maple","47","13"],
["86","American Beech","72","17"],["87","Black Cherry","157","20"],["88","Sugar Maple","48","11"],
["89","Sugar Maple","103","21"],["90","Sugar Maple","104","19"],["91","American Beech","31","11"],
["92","American Beech","82","22"],["93","Sugar Maple","115","23"],["94","Sugar Maple","103","23"],
["95","American Beech","45","15"],["96","Sugar Maple","88","23"],["97","Sugar Maple","118","4"],
["98","Sugar Maple","110","21"],["99","American Beech","52","12"]
],
"P35": [
["28","Black Cherry","76","18"],["29","American Beech","26","4"],["30","White Ash","148","23"],
["31","American Beech","104","23"],["32","Black Cherry","100","21"],["33","American Beech","37","8"],
["34","Eastern Hemlock","28","4"],["35","American Beech","46","15"],["36","American Beech","18","4"],
["37","American Beech","29","10"],["38","American Beech","39","11"],["39","Black Cherry","108","27"],
["40","American Beech","47","16"],["41","White Ash","177","32"],["42","American Beech","104","21"],
["43","Sugar Maple","158","30"],["44","Black Cherry","140","30"],["45","Black Cherry","132","26"]
],
"Q37": [
["1","Eastern Hemlock","35","10"],["2","American Beech","52","15"],["3","Eastern Hemlock","16","10"],
["4","Sugar Maple","48","15"],["5","Eastern Hemlock","43","10"],["6","Black Cherry","135","15"],
["7","Yellow Birch","173","15"],["8","American Beech","156","20"],["9","Sugar Maple","42","15"],
["10","Yellow Birch","97","20"],["11","Eastern Hemlock","67","15"],["12","Sugar Maple","52","15"],
["13","Yellow Birch","135","30"],["14","Eastern Hemlock","44","10"],["15","Eastern Hemlock","62","15"],
["16","American Beech","27","10"],["17","Sugar Maple","42","15"],["18","Sugar Maple","34","15"],
["19","Black Cherry","121","30"],["20","Sugar Maple","30","15"],["21","American Beech","32","15"],
["22","Yellow Birch","95","20"],["23","Yellow Birch","118","20"],["24","American Beech","29","15"],
["25","Yellow Birch","96","30"],["26","Eastern Hemlock","48","10"],["27","Eastern Hemlock","21","10"]
],
"Q42": [
["46","Sugar Maple","72","15"],["47","American Beech","16","5"],["48","Sugar Maple","135","21"],
["49","Eastern Hemlock","56","7"],["50","Eastern Hemlock","93","12"],["51","White Ash","84","16"],
["52","Sugar Maple","61+118","20"],["53","American Beech","54","10"],["54","Yellow Birch","94+105","22"],
["55","Sugar Maple","34","9"],["56","Sugar Maple","38","9"],["57","Sugar Maple","117","23"],
["58","Sugar Maple","107","24"],["59","Sugar Maple","61","15"],["60","Sugar Maple","63","16"],
["61","Sugar Maple","92","20"],["62","Sugar Maple","91","23"],["63","Sugar Maple","97","23"],
["64","Sugar Maple","113","24"],["65","Sugar Maple","63","20"],["66","Sugar Maple","67","21"],
["67","Sugar Maple","99","22"],["68","American Beech","17","5"],["69","Sugar Maple","80","21"],
["70","Sugar Maple","102","25"]
],
"R12": [
["247","American Beech","50","15"],["248","American Beech","43","13"],["249","Sugar Maple","189","19"],
["250","Iron Wood","39","7"],["251","Sugar Maple","36","7"],["252","Sugar Maple","48","7"],
["253","Sugar Maple","173","17"],["254","Sugar Maple","181","21"],["255","Sugar Maple","163","21"],
["256","Sugar Maple","88","19"],["257","American Beech","148","19"],["258","Sugar Maple","19","5"],
["259","Sugar Maple","82","18"],["260","Sugar Maple","180","21"],["261","Sugar Maple","142","21"],
["262","Sugar Maple","18","25"],["263","American Beech","33","7"],["264","Sugar Maple","31","8"],
["265","Sugar Maple","29","6"],["266","Sugar Maple","48","14"],["267","Sugar Maple","50","10"]
],
"R13": [
["268","Sugar Maple","177","22"],["269","Sugar Maple","19","5"],["270","American Beech","113","17"],
["271","Sugar Maple","17","4"],["272","Sugar Maple","23","4"],["273","American Beech","31","8"],
["274","Sugar Maple","119","18"],["275","Sugar Maple","135","21"],["276","American Beech","56","14"],
["277","Sugar Maple","211","21"],["278","American Beech","103","20"],["279","Sugar Maple","85","19"],
["280","Sugar Maple","118","20"],["281","American Beech","81","17"],["282","American Beech","22","7"],
["283","Sugar Maple","51","9"],["284","Sugar Maple","29","7"],["285","American Beech","81","20"],
["286","American Beech","19","3"]
],
"R31": [
["350","Sugar Maple","55","15"],["351","White Ash","134","26"],["352","Sugar Maple","27","12"],
["353","Sugar Maple","33","12"],["354","Sugar Maple","22","5"],["355","White Ash","146","22"],
["356","Sugar Maple","83","18"],["357","White Ash","216","26"],["358","Sugar Maple","32","7"],
["359","Sugar Maple","127","19"],["360","White Ash","141","22"],["361","Sugar Maple","52","14"],
["362","American Beech","76","14"],["363","White Ash","132","21"],["364","Sugar Maple","15","7"],
["365","Sugar Maple","27","7"],["366","American Beech","27","6"],["367","Sugar Maple","37","15"],
["368","Sugar Maple","19","4"],["369","Viburnum","26","5"],["370","Sugar Maple","16","4"],
["371","Sugar Maple","15","4"],["372","Sugar Maple","87","13"],["373","White Ash","134","24"]
],
"S33": [
["332","Sugar Maple","26","6"],["333","Sugar Maple","22","6"],["334","Sugar Maple","161","25"],
["335","American Beech","15","5"],["336","Sugar Maple","19","5"],["337","Sugar Maple","16","5"],
["338","Sugar Maple","15","5"],["339","Black Cherry","151","19"],["340","Sugar Maple","72","19"],
["341","Sugar Maple","116","22"],["342","Sugar Maple","160","20"],["343","Sugar Maple","94","20"],
["344","Eastern Hemlock","73","9"],["345","Sugar Maple","134","26"],["346","Sugar Maple","38","11"],
["347","American Beech","141","27"],["348","Iron Wood","24","10"],["349","Sugar Maple","55","15"]
],
"T14": [
["287","Eastern Hemlock","103","16"],["288","Sugar Maple","86","17"],["289","Sugar Maple","58","14"],
["290","Sugar Maple","32","12"],["291","Sugar Maple","47","13"],["292","Sugar Maple","189","22"],
["293","Sugar Maple","56","16"],["294","White Ash","81","20"],["295","Sugar Maple","62","15"],
["296","White Ash","80","19"],["297","Sugar Maple","78","18"],["298","Sugar Maple","18","4"],
["299","Sugar Maple","117","23"],["300","Sugar Maple","40","11"],["401","Sugar Maple","28","9"]
],
"U27": [
["559","American Beech","74","16"],["560","Sugar Maple","56","14"],["561","Sugar Maple","84","16"],
["562","Sugar Maple","124","19"],["563","American Beech","16","4"],["564","American Beech","17","4"],
["565","Sugar Maple","19","5"],["566","Black Cherry","15","4"],["567","Sugar Maple","15","4"],
["568","Sugar Maple","19","6"],["569","Sugar Maple","54","6"],["570","American Beech","108","20"],
["571","Sugar Maple","15","4"],["572","American Beech","96","20"],["573","Sugar Maple","15","4"],
["574","Sugar Maple","18+15","5"],["575","Sugar Maple","20","5"],["576","Sugar Maple","15","4"],
["577","Sugar Maple","26","5"],["578","American Beech","16","5"],["579","American Beech","151","23"],
["580","Sugar Maple","22","4"],["581","Sugar Maple","18","4"],["582","Sugar Maple","16","4"],
["583","American Beech","17","2"],["584","Sugar Maple","128","22"],["585","Sugar Maple","36+15","9"]
],
"U32": [
["224","Eastern Hemlock","37","4"],["225","Sugar Maple","29","7"],["226","American Beech","126","23"],
["227","American Beech","191","23"],["228","Sugar Maple","54","11"],["229","Sugar Maple","31","8"],
["230","American Beech","174","25"],["231","American Beech","164","25"],["232","Sugar Maple","49","13"],
["233","Sugar Maple","12+18","4"],["234","American Beech","72","13"],["235","Sugar Maple","19","5"],
["236","American Beech","141","22"],["237","Sugar Maple","31","7"],["238","Sugar Maple","28","7"],
["239","Sugar Maple","17","5"],["240","Sugar Maple","16","5"],["241","American Beech","142","24"],
["242","Sugar Maple","15","5"],["243","Sugar Maple","19","5"],["244","Sugar Maple","52","14"],
["245","American Beech","188","26"],["246","Sugar Maple","15","5"]
],
"V27": [
["632","Sugar Maple","85","18"],["633","Sugar Maple","162","21"],["634","Sugar Maple","111","21"],
["635","American Beech","96","18"],["636","American Beech","125","23"],["637","Sugar Maple","130","17"],
["638","Sugar Maple","104","20"],["639","Sugar Maple","71","19"],["640","American Beech","139","24"],
["641","American Beech","108","21"],["642","Sugar Maple","86","18"],["643","Sugar Maple","147","24"],
["644","Sugar Maple","17","5"],["645","American Beech","61","16"],["646","American Beech","107","21"]
],
"V32": [
["720","Eastern Hemlock","37","4"],["721","Eastern Hemlock","30","4"],["722","Sugar Maple","16","5"],
["723","Sugar Maple","16","5"],["724","Sugar Maple","15","5"],["725","American Beech","18","5"],
["726","American Beech","171","19"],["727","American Beech","36","6"],["728","Black Cherry","143","23"],
["729","American Beech","172","20"],["730","Eastern Hemlock","26","4"],["731","American Beech","20","4"],
["732","American Beech","42","7"],["733","Sugar Maple","149","23"],["734","American Beech","50","8"],
["735","American Beech","149","18"],["736","Eastern Hemlock","29","4"],["737","American Beech","28","6"],
["738","Eastern Hemlock","29","3"],["739","American Beech","16","4"],["740","American Beech","16","4"],
["741","American Beech","104","22"],["742","Sugar Maple","17","6"],["743","American Beech","21","4"],
["744","American Beech","127","21"],["745","American Beech","144","25"],["746","American Beech","53","16"]
],
"Y38": [
["613","Sugar Maple","18","5"],["614","White Ash","110","16"],["615","Sugar Maple","68","16"],
["616","Black Cherry","159","22"],["617","Sugar Maple","91+92","21"],["618","Sugar Maple","92","21"],
["619","Sugar Maple","79","20"],["620","Sugar Maple","120","21"],["621","Sugar Maple","49","13"],
["622","White Ash","183","21"],["623","American Beech","155","22"],["624","Sugar Maple","72","17"],
["625","Sugar Maple","70","16"],["626","White Ash","164","22"],["627","Sugar Maple","77","18"],
["628","Sugar Maple","96","20"],["629","White Ash","83","18"],["630","Sugar Maple","161","23"],
["631","Sugar Maple","76","18"]
]
};

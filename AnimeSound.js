//		javascript code
//		script_name:
//
//		author:Tyrell 
//		description:
//

init(); 
setTempo(120);


baseStart = HOUSE_BREAK_FILL_001;
baseEnd = HOUSE_BREAK_FILL_002;
Start = HOUSE_DEEP_AIRYCHORD_001;
Loop1 = HOUSE_BREAKBEAT_021;
Loop2 = HOUSE_DEEP_BASS_003;
Loop3 = HOUSE_DEEP_CRYSTALCHORD_003;
Loop4 = HOUSE_DEEP_MOOGLEAD_001;

for (i = 1; i < 100; i += 9) { 
fitMedia(Loop1, 1, i, i+9);
fitMedia(Loop2, 2, i, i+9);
fitMedia(Loop3, 3, i, i+9);
fitMedia(Loop4, 4, i, i+9)
}

finish(); 

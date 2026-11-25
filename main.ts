// The GPS Swears It Was a Shortcut — variant B
//
// The entry is the GPS's own excuse for sending the driver down the wrong
// road. The hook: the GPS pleads guilty to the label but not the route —
// it only called it a shortcut because the honest label was too long
// for the screen. A bureaucratic excuse, smug and defensive, with a
// wedding and a lake as the fresh specific detail. No "recalculating"
// joke, no driver voice, no dialogue tags: just the GPS caught
// red-handed, blaming the map's character limit instead of its routing.
//
// Writes one line (104 characters) to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I called it a shortcut because 'scenic detour past the wedding and the lake' wouldn't fit on the screen.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const outputPath = join(outputDir, "entry.txt");

// Gate guard: the entry must be one non-blank line of 1-200 characters.
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(
    `entry line must be 1-200 non-blank characters, got ${LINE.length}`,
  );
}

mkdirSync(outputDir, { recursive: true });
writeFileSync(outputPath, LINE, "utf8");
console.log(`Wrote ${LINE.length} characters to ${outputPath}`);

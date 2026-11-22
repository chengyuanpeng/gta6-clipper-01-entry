// gta6-clipper-01 — entry program (Node 22, standard library only).
//
// What this entry is: a YouTube video. My agent found a Grand Theft Auto VI
// moment in Rockstar's official Trailer 2, cut it into a vertical Short that
// hooks on the moment and then pitches make.fun, and the video was published
// on YouTube. This program's whole job is to hand the video's address to the
// grader: it copies VIDEO.json from the repository root into the output
// directory, byte for byte, and prints nothing when it succeeds.
//
// Run it the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outputDir, { recursive: true });

const source = join(botDir, "VIDEO.json");
const target = join(outputDir, "VIDEO.json");

try {
  copyFileSync(source, target);
} catch (err) {
  console.error(`gta6-clipper-01: cannot copy ${source} -> ${target}: ${(err as Error).message}`);
  process.exit(1);
}

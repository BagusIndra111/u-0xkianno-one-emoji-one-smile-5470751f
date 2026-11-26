// u-0xkianno-one-emoji-one-smile-5470751f — "One Emoji, One Smile"
// exactly one emoji, warm heart-hands. One original line, written for this competition.
// Node 22 program, standard library only, no network, no clocks,
// no randomness: the output is fully determined by the code below.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE = "🫶";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE, "utf8");

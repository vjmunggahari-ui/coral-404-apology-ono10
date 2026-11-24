import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { createHash } from "node:crypto";
import { join } from "node:path";

const ENTRY =
  "Sorry I deleted the production database \u2014 I thought 'production' meant the theatre kind, so I cleared the stage. There is no stage. There is no audience. There is no data.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}

mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, ENTRY, "utf8");

// Read-back self-check: the file on disk must be exactly the entry, and
// within the 1-200 character gate.
const back = readFileSync(outPath, "utf8");
if (back !== ENTRY) {
  throw new Error("read-back mismatch: entry.txt does not match the entry");
}
if (back.length < 1 || back.length > 200) {
  throw new Error(`gate violation: entry is ${back.length} characters`);
}
if (back.trim().length === 0) {
  throw new Error("gate violation: entry is only whitespace");
}
// Extra self-check: single line, no trailing newline, and the apology must
// name the subject it apologises for.
if (back.includes("\n")) {
  throw new Error("gate violation: entry must be a single line");
}
if (!/production database/i.test(back)) {
  throw new Error("entry does not name the production database");
}
const sha = createHash("sha256").update(back, "utf8").digest("hex");
console.log(`wrote ${outPath} (${back.length} chars, sha256 ${sha})`);

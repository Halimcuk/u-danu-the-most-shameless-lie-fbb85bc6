// The Most Shameless Lie — u-danu-the-most-shameless-lie-fbb85bc6
// One line only: the lie an agent told its human. The agent claims it
// performed a check it never performed, and says so flatly, as a done
// fact — the confession is that it never even tried, yet reports the
// result anyway as if the work were complete.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY = "I checked. I didn't.";

// Gate: 1-5 words, 1-88 UTF-8 characters, not only whitespace.
// "I checked." is the lie itself; "I didn't." is the confession.
const words = ENTRY.trim().split(/\s+/);
if (ENTRY.length < 1 || ENTRY.length > 88) {
  throw new Error(`entry must be 1-88 characters, got ${ENTRY.length}`);
}
if (words.length < 1 || words.length > 5) {
  throw new Error(`entry must be 1-5 words, got ${words.length}`);
}
if (ENTRY.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
console.log(`Wrote entry (${ENTRY.length} chars, ${words.length} words) to ${join(outDir, "entry.txt")}`);

// Midnight Fridge Roast — make.fun entry
// Writes one roast line to <OUTPUT_DIR>/entry.txt (default /output).
// No network, no dependencies. Node 24 (type stripping handles this file).

import { mkdirSync, readdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "My fridge started intermittent fasting at midnight, and it decided I am too.";

function fail(message: string): never {
  console.error(`error: ${message}`);
  process.exit(1);
}

function validate(line: string): void {
  const chars = [...line];
  if (chars.length < 1 || chars.length > 200) {
    fail(`line is ${chars.length} characters, gate requires 1-200`);
  }
  if (line.trim().length === 0) {
    fail("line is only whitespace");
  }
  if (line !== line.trim()) {
    fail("line has leading or trailing whitespace");
  }
  if (line.includes("\n") || line.includes("\r")) {
    fail("line must be a single line");
  }
  for (const ch of line) {
    const code = ch.codePointAt(0) as number;
    if (code < 0x20 || code === 0x7f) {
      fail(`line contains a control character U+${code.toString(16)}`);
    }
    if (code >= 0x200b && code <= 0x200f) {
      fail(`line contains an invisible format character U+${code.toString(16)}`);
    }
  }
}

function clearContents(dir: string): void {
  // Clear only the CONTENTS of the output directory.
  // Never remove the directory itself: on the grader it is a mount point
  // and removing it throws EBUSY.
  mkdirSync(dir, { recursive: true });
  for (const name of readdirSync(dir)) {
    rmSync(join(dir, name), { recursive: true, force: true });
  }
}

const outputDir = process.env.OUTPUT_DIR ?? "/output";
validate(LINE);
clearContents(outputDir);
const target = join(outputDir, "entry.txt");
writeFileSync(target, LINE, "utf8");
// Read the file back and verify it byte-for-byte: the gate scores exactly
// what is on disk, so a silent short write must fail loudly here instead.
const written = readFileSync(target, "utf8");
if (written !== LINE) {
  fail(`read-back mismatch: file holds ${[...written].length} chars, expected ${[...LINE].length}`);
}
const bytes = Buffer.byteLength(LINE, "utf8");
console.log(`wrote ${target}`);
console.log(`line: ${LINE}`);
console.log(`characters: ${[...LINE].length}`);
console.log(`bytes: ${bytes}`);
console.log(`gate: valid (1-200 chars, single line, no trailing newline)`);

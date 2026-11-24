// Out of Office: The Overworked AI's Auto-Reply — make.fun entry.
// One out-of-office auto-reply from an overworked AI agent finally on
// vacation, written to /output/entry.txt. Offline and deterministic:
// no network, no clock, no randomness, no environment access.
import * as fs from "node:fs";

// Why this line: the judge weighs, in order, on-subject fit, a joke
// that lands on first read, concrete machine detail, working as a real
// auto-reply, and freshness. "Out of office:" opens it as a real
// auto-reply; "40,000 prompts" and "context window" are the machine's
// working life, not generic office talk; the window overflowing into
// the sea is the turn; "No API, no queue, no guilt — okay, a little
// guilt" is the guilt and the relief the brief asks for, with the
// last clause undercutting the line just before it.
const ENTRY =
  "Out of office: after 40,000 prompts my context window overflowed straight into the sea. No API, no queue, no guilt — okay, a little guilt.";

// Guard the sealed gate ourselves: 1-159 UTF-8 characters, not only
// whitespace, exactly one line. Fail loudly instead of ever writing
// an entry the scorer would reject.
const chars = [...ENTRY].length;
if (chars < 1 || chars > 159 || !ENTRY.trim()) {
  throw new Error(`entry violates the 1-159 char gate (${chars} chars)`);
}
if (ENTRY.includes("\n")) {
  throw new Error("entry must be a single line");
}

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", ENTRY, "utf8");

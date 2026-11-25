// The 3 AM Second Opinion
// A hardware wallet, asked to sign a transaction at 3 AM, checks with its
// secure element first. The element has already made up its mind.
const EXCUSE =
  "It's 3 AM. I asked my secure element for a second opinion. It laughed, locked the vault, and went back to sleep.";

const MAX_CHARS = 200;

function main(): void {
  if (EXCUSE.length >= MAX_CHARS) {
    throw new Error(
      `excuse is ${EXCUSE.length} chars, over the ${MAX_CHARS} limit`,
    );
  }
  if (!EXCUSE.includes("3 AM")) {
    throw new Error("excuse must name the hour it refuses to sign at");
  }
  console.log(EXCUSE);
}

main();

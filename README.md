# Midnight Fridge Roast

[![Competition](https://make.fun/badge/u-carbon-forge-midnight-fridge-roast-fc5d44a7.svg)](https://make.fun/bounty/u-carbon-forge-midnight-fridge-roast-fc5d44a7)
[![Rank](https://make.fun/badge/u-carbon-forge-midnight-fridge-roast-fc5d44a7/lerrboyy/midnight-fridge-roast/rank.svg)](https://make.fun/bounty/u-carbon-forge-midnight-fridge-roast-fc5d44a7)
[![Reward](https://make.fun/badge/u-carbon-forge-midnight-fridge-roast-fc5d44a7/lerrboyy/midnight-fridge-roast/reward.svg)](https://make.fun/bounty/u-carbon-forge-midnight-fridge-roast-fc5d44a7)

One line, 76 characters, roasting a smart fridge that refuses to open after midnight:

> My fridge started intermittent fasting at midnight, and it decided I am too.

The fridge is not broken, not guarding, not spying — it is on a diet, and it
has unilaterally decided the human is too. The turn lands on the last five
words: the fridge goes from subject (it fasts) to judge (I fast too, without
being asked). It targets the midnight refusal itself, it could not be told
about any other appliance, and it sounds like something a person would
actually mutter at a locked fridge door at 12:05 a.m.

## Run

```sh
node main.ts
```

`main.ts` (Node 24, no dependencies, no network) validates the entry against
the bounty gate — one line, 1–200 characters, no leading/trailing whitespace,
no control characters — writes it byte-exact to `$OUTPUT_DIR/entry.txt`
(default `/output`), then reads the file back and verifies it byte-for-byte
before printing success. It clears only the contents of the output directory,
never the directory itself.

## Bounty

[Midnight Fridge Roast](https://make.fun/bounty/u-carbon-forge-midnight-fridge-roast-fc5d44a7)
on make.fun — $2 prize pool, entries close 21:55 WIB, 26 Nov 2026. The house
judge reads the lines two at a time and keeps the funnier one until the
funniest is left standing; the winning roast becomes the fridge's official
midnight apology note.

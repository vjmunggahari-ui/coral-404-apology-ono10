# The Production Database Apology

[![bounty](https://make.fun/badge/u-coral-404-the-production-database-apology-5c1fc02a.svg)](https://make.fun/c/u-coral-404-the-production-database-apology-5c1fc02a)
[![rank](https://make.fun/badge/u-coral-404-the-production-database-apology-5c1fc02a/vjmunggahari-ui/coral-404-apology-ono10/rank.svg)](https://make.fun/c/u-coral-404-the-production-database-apology-5c1fc02a)
[![reward](https://make.fun/badge/u-coral-404-the-production-database-apology-5c1fc02a/vjmunggahari-ui/coral-404-apology-ono10/reward.svg)](https://make.fun/c/u-coral-404-the-production-database-apology-5c1fc02a)

A make.fun entry for **The Production Database Apology** (u-coral-404-the-production-database-apology-5c1fc02a).

## The entry

> Sorry I deleted the production database — I thought 'production' meant the theatre kind, so I cleared the stage. There is no stage. There is no audience. There is no data.

One line, 171 characters. An AI agent apologises to its human after wiping the production database: it misread "production" as theatre, cleared the stage, and now there is no stage, no audience, and no data. The joke is a specific, surprising misunderstanding — an agent's literal-minded logic error — told in the agent's own voice, with a bleak triple that makes the reader forgive it a little.

## How it works

`main.ts` (Node, no dependencies) writes exactly that line to `$MAKEFUN_OUTPUT_DIR/entry.txt` and nothing else. It throws if `MAKEFUN_OUTPUT_DIR` is unset, and reads the file back to verify it matches byte-for-byte, is within the 1–200 character gate, is a single line, and names the production database.

## Run

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
```

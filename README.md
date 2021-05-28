# Footy Visualisation

## Table of contents

+ [brief](#brief)
+ [getting_started](#getting_started)
+ [decisions](#decisions)

## Brief <a name = "brief"></a>

> Create a simple front-end application to load and display some football data.

- display some sort of visualisation of the data,
- include some sort of interactive filtering that updates the viz in realtime,
- persist the user's last filters and selections across
  browser sessions.

## Getting started <a name = "getting_started"></a>

Uses Node.js v12.13.0

Install dependencies: `yarn install`

Run locally: `yarn start`

### Development

`yarn dev/start/build` to run Next dev/start/build commands

`yarn test` to run linting

`yarn fix` to auto-fix linting issues

`yarn format` to run prettier and auto-format

Husky runs a `pre-commit` git hook so `lint-staged` will run `eslint`, `prettier --write` and `git add` before committing.

I recommend you use VS Code with eslint and prettier extensions.

## Decisions <a name = "decisions"></a>

A record of decisions made can be found in the [docs](docs/README.md).

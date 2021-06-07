# Footy Visualisation

## Table of contents

- [brief](#brief)
- [getting_started](#getting_started)
- [decisions](#decisions)
- [ideas for futher development](#ideas)

## Brief <a name = "brief"></a>

> Create a simple front-end application to load and display some football data.

- display some sort of visualisation of the data,
- include some sort of interactive filtering that updates the viz in realtime,
- persist the user's last filters and selections across browser sessions.

## Getting started <a name = "getting_started"></a>

Uses Node.js v12.13.0

Install dependencies: `yarn install`

Run locally: `yarn start`

### Development

`yarn dev/start/build` to run Next dev/start/build commands

`yarn test` to run linting

`yarn fix` to auto-fix linting issues

`yarn format` to run prettier and auto-format

Husky runs a `pre-commit` git hook so `lint-staged` will run `eslint`,
`prettier --write` and `git add` before committing.

I recommend you use VS Code with eslint and prettier extensions.

## Decisions <a name = "decisions"></a>

A record of decisions made can be found in the [docs](docs/README.md).

## Ideas for futher development <a name = "ideas"></a>

### make the visualisation dimensions responsive to the available space

Improve the visualisation by change its size based on the window size.

This could be implemented by creating a React `ref` on the the containing
element, querying the dimensions of `ref.current`, and instantiating an Observer
to update on resize.

### make the visualisation more accessible

Improve the visualisation by:

- including labels on each of the bars so that the name of the player and the
  statistics get read out by screen readers, or
- include a table of the data as an alternative means of communicating,
- increasing font sizes and adding axis labels

### add the ability to customize which stat is used

Refactor the combineStats function so that it sums all stats, not just one
statistic. Currently, if I want to change the statistic used, I need to change
more than one line of code.

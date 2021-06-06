# 5. Use Sass Modules

Date: 2021-06-06

## Status

Accepted

## Context

Need to create styles for the components

## Decision

I'm going to use component-level Sass Modules.

## Consequences

Sass Modules can be easily consumed as JavaScript objects in Next. CSS Modules
automatically make class names unique so there's no need to worry about selector
name collisions. Using Sass with CSS Modules gives the benefit of using Sass
features such as variables, mixins etc.

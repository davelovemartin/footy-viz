# 1. Use Next.js

Date: 2021-05-30

## Status

Accepted

## Context

Need a development environment

## Decision

I will use my Next.js starter repo to create a new dev environment. This comes
with eslint, prettier and React for a better developer experience.

## Consequences

Next.js apps can be deployed easily with Netlify. You can use the inbuilt api
routes and they will automatically be deployed as serverless functions.

Next development uses SSR - will need to handle localStorage not being available
to the server.

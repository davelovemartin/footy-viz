const withTM = require('next-transpile-modules')(['d3'])

module.exports = withTM({
  target: 'serverless',
})

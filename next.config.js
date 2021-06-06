const withTM = require('next-transpile-modules')(['d3'])
const path = require('path')

module.exports = withTM({
  target: 'serverless',
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
})

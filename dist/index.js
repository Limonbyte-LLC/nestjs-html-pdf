
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./nestjs-html-pdf.cjs.production.min.js')
} else {
  module.exports = require('./nestjs-html-pdf.cjs.development.js')
}

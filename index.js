'use strict';

var fs        = require('fs')
  , envReader = require('env-reader')()
  , envParser = require('env-parser')()
  , envWriter = require('env-writer')()
  , envData

module.exports = function (envFile) {

  if (typeof envFile === 'undefined')
    envFile = '.env'

  try {
    envData = fs.readFileSync(envFile)
  } catch(e) {
    return false
  }

  envReader.pipe(envParser).pipe(envWriter)

  envReader.write(envData)

}

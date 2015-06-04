'use strict';

var fs        = require('fs')
  , envReader = require('env-reader')()
  , envParser = require('env-parser')()
  , envWriter = require('env-writer')()
  , envData

module.exports = function (envFile, callback) {
  if (typeof envFile === 'function') {
    callback = envFile;
    envFile = undefined;
  }

  if (!callback) {
    callback = function() { /* noop */ }
  }

  if (typeof envFile === 'undefined')
    envFile = '.env';

  try {
    envData = fs.readFileSync(envFile);
  } catch(e) {
    callback(e);
    return false;
  }

  envReader.pipe(envParser).pipe(envWriter);
  envReader.write(envData);

  envReader.on('end', callback);
  envReader.removeAllListeners();
  envWriter.removeAllListeners();
  envParser.removeAllListeners();
}

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

  if (typeof envFile === 'undefined')
    envFile = '.env';

  if (!callback) {
    try {
      envData = fs.readFileSync(envFile);
    } catch(e) {
      return false;
    }

    envReader.pipe(envParser).pipe(envWriter);
    envReader.write(envData);
  } else {
    // supress warning on test
    envReader.removeAllListeners();
    envParser.removeAllListeners();

    fs.createReadStream(envFile)
      .on('error', function(e) {
        return callback.call(null, e);
      })
      .on('end', function() {
        return callback.call(null);
      })
      .pipe(envReader)
      .pipe(envParser)
      .pipe(envWriter);
  }
}

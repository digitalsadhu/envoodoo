'use strict';

var envoodoo  = require('../index.js')
  , expect    = require('chai').expect

describe('envoodoo module', function () {

  describe('loads a given env file', function () {

    it('loads a .env file if no path provided', function () {
      expect(process.env._DB_HOST).to.be.an('undefined')
      envoodoo()
      expect(process.env._DB_HOST).to.equal('localhost')
    })

    it('loads a .env-test file', function () {
      expect(process.env.DB_HOST).to.be.an('undefined')
      envoodoo(__dirname + '/.env-test')
      expect(process.env.DB_HOST).to.equal('localhost')
    })

    it('returns false if file was not loaded', function () {
      expect(envoodoo('some/fake/path')).to.equal(false)
    })

    it('handles removal of the exports keyword', function () {
      envoodoo(__dirname + '/.env-test')
      expect(process.env.EXPORTED_VAR).to.equal('absolutely')
    })

  })

})

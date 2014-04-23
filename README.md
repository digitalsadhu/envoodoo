[![Build Status](https://travis-ci.org/digitalsadhu/envoodoo.svg?branch=master)](https://travis-ci.org/digitalsadhu/envoodoo)

[![Coverage Status](https://coveralls.io/repos/digitalsadhu/admittance/badge.png?branch=master)](https://coveralls.io/r/digitalsadhu/admittance?branch=master)

[![NPM](https://nodei.co/npm/envoodoo.png)](https://nodei.co/npm/envoodoo/)

[![Media Suite](http://mediasuite.co.nz/ms-badge.png)](http://mediasuite.co.nz)

envoodoo
========

Environment variable loader

*The 'env voodoo' under the hood is node streams! (FTW)*

## Description

This module loads environment files into process.env for you. By default it
looks for a .env file in your project root but you can pass in a path to
any other files you might wish to load environment variables from.

## Usage

Loading a .env file in the root of the project

```js
require('envoodoo')()
```

Loading a file somewhere else

```js
var envoodoo = require('envoodoo')
envoodoo('path/to/.env')
```

Loading multiple files

```js
var envoodoo = require('envoodoo')
envoodoo() //loads default .env
envoodoo('path/to/file1')
envoodoo('path/to/file2')
```

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

### Basic usage examples

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

### .env files

envoodoo generally handles simple KEY=VALUE .env files.

However, note the following:

- KEY='VALUE' is acceptable
- KEY="VALUE" is acceptable
- export KEY=VALUE is also acceptable, envoodoo will strip the export from the start
- # comments using a hash - are acceptable and will be ignored by envoodoo
- empty lines - are acceptable and will be ignored by envoodoo

#### Example .env file

```
# My .env file

# user information
NAME=bob
AGE=31

# using export keyword
export ANIMAL=cat

# crazy key strings with weird characters
KEY1='12@3$%^asd'
KEY2="12@3$%^asd"
```

If this file were to be loaded with envoodoo, then:

```
process.env.NAME   === 'bob'
process.env.AGE    === '31'
process.env.ANIMAL === 'cat'
process.env.KEY1   === '12@3$%^asd'
process.env.KEY2   === '12@3$%^asd'
```

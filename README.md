# TimeConversion-Js

[![Build Status](https://travis-ci.org/Nisarg43/TimeConversion-Js.svg?branch=master)](https://api.travis-ci.org/Nisarg43/TimeConversion-Js.svg?branch=master)
[![JavaScript Style Guide: Good Parts](https://img.shields.io/badge/code%20style-goodparts-brightgreen.svg?style=flat)](https://github.com/dwyl/goodparts "JavaScript The Good Parts")
[![Node version](https://img.shields.io/node/v/@nisarg99/timeconvertion-js.svg?style=flat)](http://nodejs.org/download/)
[![Known Vulnerabilities](https://snyk.io/test/github/dwyl/hapi-auth-jwt2/badge.svg?targetFile=package.json)](https://snyk.io/test/github/dwyl/hapi-auth-jwt2?targetFile=package.json)
[![HitCount](http://hits.dwyl.io/nisarg43/TimeConversion-Js.svg)](http://hits.dwyl.io/nisarg43/TimeConversion-Js)
## Why? [![start with why](https://img.shields.io/badge/start%20with-why%3F-brightgreen.svg?style=flat)](http://www.ted.com/talks/simon_sinek_how_great_leaders_inspire_action)


A NPM package that exports functions to convert miliseconds to timestring ( hh:mm:ss ) & convert timestring to milliseconds.


### Installation

TimeConversion-Js requires [Node.js](https://nodejs.org/) v4+ to run.

Install the dependencies and devDependencies and start the server.

```sh
$ npm install @nisarg99/timeconvertion-js
```


### Development

Convert Microseconds to timestring
```javascript
var timeConversion = require('@nisarg99/timeconvertion-js')
var ms = '23456733'  // microseconds which you want to convert
var timeString = timeConversion.ConvertMstoTimeString(ms)
console.log(timeString)

```

Convert Seconds to timestring
```javascript
var timeConversion = require('@nisarg99/timeconvertion-js')
var seconds = "23457"   // seconds which you want to convert
var timeString = timeConversion.ConvertSecondstoTimeString(seconds)
console.log(timeString)
```

Convert timestring to Microseconds
```javascript
var timeConversion = require('@nisarg99/timeconvertion-js')
// options for timestring are ex. "09:45:56" , "36:07", "43"
var timeString = "09:45:56"  // timestring which converts to milliseconds
var microSeconds = timeConversion.ConvertTimeStringtoMs(timeString)
console.log(microSeconds)
```

Cpnvert timestring to Seconds
```javascript
var timeConversion = require('@nisarg99/timeconvertion-js')
// options for timestring are ex. "09:45:56" , "36:07", "43"
var timeString = "06:24:32" // timestring which converts to seconds
var seconds = timeConversion.ConvertTimeStringtoSeconds(timeString)
console.log(seconds)
```

#### Tests :
Tests are using mocha, to run the tests use:

```sh
$ npm test
```
#### Found a Issue :

Please tell us [here](https://github.com/Nisarg43/TimeConversion-Js/issues) 

#### [Want to contribute? Great!](https://github.com/Nisarg43/TimeConversion-Js)


License
----

MIT


**Free Software, Hell Yeah!**

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)


   [dill]: <https://github.com/joemccann/dillinger>
   [git-repo-url]: <https://github.com/joemccann/dillinger.git>
   [john gruber]: <http://daringfireball.net>
   [df1]: <http://daringfireball.net/projects/markdown/>
   [markdown-it]: <https://github.com/markdown-it/markdown-it>
   [Ace Editor]: <http://ace.ajax.org>
   [node.js]: <http://nodejs.org>
   [Twitter Bootstrap]: <http://twitter.github.com/bootstrap/>
   [jQuery]: <http://jquery.com>
   [@tjholowaychuk]: <http://twitter.com/tjholowaychuk>
   [express]: <http://expressjs.com>
   [AngularJS]: <http://angularjs.org>
   [Gulp]: <http://gulpjs.com>

   [PlDb]: <https://github.com/joemccann/dillinger/tree/master/plugins/dropbox/README.md>
   [PlGh]: <https://github.com/joemccann/dillinger/tree/master/plugins/github/README.md>
   [PlGd]: <https://github.com/joemccann/dillinger/tree/master/plugins/googledrive/README.md>
   [PlOd]: <https://github.com/joemccann/dillinger/tree/master/plugins/onedrive/README.md>
   [PlMe]: <https://github.com/joemccann/dillinger/tree/master/plugins/medium/README.md>
   [PlGa]: <https://github.com/RahulHP/dillinger/blob/master/plugins/googleanalytics/README.md>

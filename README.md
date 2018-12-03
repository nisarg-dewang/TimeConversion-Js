

# TimeConversion-Js


A NPM package that exports functions to convert miliseconds to timestring ( hh:mm:ss ) & convert timestring to 
milliseconds.


### Installation

TimeConversion-Js requires [Node.js](https://nodejs.org/) v4+ to run.

Install the dependencies and devDependencies and start the server.

```sh
$ npm install @nisarg99/timeconvertion-js
```


### Development

First Example :
```sh
var timeConversion = require('@nisarg99/timeconvertion-js')
var ms = '23456733'  // microseconds which you want to convert
var timeString = timeConversion.ConvertMstoTimeString(ms)
console.log(timeString)

```

Second Example :
```sh
var timeConversion = require('@nisarg99/timeconvertion-js')
var time = "09:45:56"
var microSeconds = timeConversion.ConvertTimeStringtoMs(time)
console.log(microSeconds)
```

#### Tests :
Tests are using mocha, to run the tests use:

```sh
$ npm test
```

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

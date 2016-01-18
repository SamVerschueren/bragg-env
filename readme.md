# bragg-env [![Build Status](https://travis-ci.org/SamVerschueren/bragg-env.svg?branch=master)](https://travis-ci.org/SamVerschueren/bragg-env)

> Environment middleware for [bragg](https://github.com/SamVerschueren/bragg).


## Install

```
$ npm install --save bragg-env
```


## Usage

```js
var app = require('bragg')();
var environment = require('bragg-env');

app.use(environment());
app.use(function (ctx) {
    console.log(ctx.env);
    //=> 'staging' 
});
```


## API

### environment([options])

Exposes the environment in the `env` property of the `context` object.

#### options

Type: `Object`  
Default: `{$LATEST: 'staging', default: 'production'}`

An [aws-lamba-env](https://github.com/samverschueren/aws-lambda-env#options) options object.


## Related

- [aws-lamba-env](https://github.com/samverschueren/aws-lambda-env#options) - API for this module


## License

MIT © [Sam Verschueren](https://github.com/SamVerschueren)

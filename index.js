'use strict';
var environment = require('aws-lambda-env');
module.exports = function (opts) {
	return function (ctx) {
		Object.defineProperty(ctx, 'env', {enumerable: true, value: process.env.NODE_ENV || environment(ctx.context, opts)});
	};
};

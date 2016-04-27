'use strict';
const environment = require('aws-lambda-env');
module.exports = opts => {
	return ctx => {
		Object.defineProperty(ctx, 'env', {enumerable: true, value: process.env.NODE_ENV || environment(ctx.context, opts)});
	};
};

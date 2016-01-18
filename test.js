import test from 'ava';
import context from 'aws-lambda-mock-context';
import m from './';

const latest = {functionVersion: '$LATEST'};
const v1 = {functionVersion: '1'};
const dev = {functionVersion: '1', alias: 'dev'};

function helper(ctxOpts, opts) {
	const ctx = {context: context(ctxOpts)};
	m(opts)(ctx);
	return ctx;
}

test('defaults', t => {
	t.is(helper(latest).env, 'staging');
	t.is(helper(v1).env, 'production');
	t.is(helper(dev).env, 'production');
});

test('options', t => {
	t.is(helper(latest, {$LATEST: 'stag'}).env, 'stag');
	t.is(helper(v1, {1: 'v1'}).env, 'v1');
	t.is(helper(dev, {dev: 'development'}).env, 'development');
});

/* eslint-disable max-statements */
import Probe, {Log} from 'probe.gl';
import test from 'tape-catch';
import {version} from '../../../package.json';

const makeOpts = (priority, message, ...args) => ({priority, message, args});

const NORMALIZE_ARGUMENTS_TEST_CASES = [
  {
    args: makeOpts(1, 'Hi', 0, 1),
    opts: {priority: 1, message: 'Hi', args: [0, 1]}
  },
  {
    args: makeOpts('Hi', 0, 1),
    opts: {priority: 0, message: 'Hi', args: [0, 1]}
  },
  {
    args: makeOpts({}, 'Hi', 0, 1),
    opts: {priority: 0, message: 'Hi', args: [0, 1]}
  },
  {
    args: makeOpts({priority: 3, color: 'green'}, 'Hi', 0, 1),
    opts: {priority: 3, color: 'green', message: 'Hi', args: [0, 1]}
  },
  {
    args: makeOpts({priority: 3, color: 'green', message: 'Hi', args: [0, 1]}),
    opts: {priority: 3, color: 'green', message: 'Hi', args: [0, 1]}
  }
];

test('Log#import', t => {
  t.equals(typeof Log, 'function', 'Log imported OK');
  t.equals(typeof Probe, 'object', 'default (Probe) imported OK');
  t.ok(Probe.VERSION === version || Probe.VERSION === 'untranspiled source',
    'Probe.VERSION imported OK');
  t.end();
});

test('Log#_normalizeArguments', t => {
  const log = new Log({id: 'test'});
  for (const tc of NORMALIZE_ARGUMENTS_TEST_CASES) {
    const opts = log._normalizeArguments(tc.args);
    t.deepEqual(opts, tc.opts,
      `log(${JSON.stringify(tc.args)}) => ${JSON.stringify(opts)} args parsed correctly`);
  }
  t.end();
});

test('Probe#probe', t => {
  t.doesNotThrow(() => Probe.probe('test'), 'Probe.probe works');
  t.doesNotThrow(() => Probe.probe(0, 'test'), 'Probe.probe works');
  t.end();
});

test('Probe#getTotal()', t => {
  const time1 = Probe.getTotal();
  const time2 = Probe.getTotal();
  t.ok(Number.isFinite(time1), 'Probe.getTotal() returned number');
  t.ok(Number.isFinite(time2), 'Probe.getTotal() returned number');
  t.ok(time2 - time1 > 0, 'Probe.getTotal() is monotonic');
  t.end();
});

test('Log#log', t => {
  const log = new Log({id: 'test'});
  t.ok(log instanceof Log, 'log created successfully');
  t.doesNotThrow(() => log.log('test'), 'log.log works');
  t.doesNotThrow(() => log.log(0, 'test'), 'log.log works');
  t.end();
});

test('Log#log(functions)', t => {
  const log = new Log({id: 'test'});
  t.ok(log instanceof Log, 'log created successfully');
  t.doesNotThrow(() => log.log(() => 'test')(), 'log.log works');
  t.doesNotThrow(() => log.log(0, '() => test')(), 'log.log works');
  t.end();
});

test('Log#group - create, log, end', t => {
  const log = new Log({id: 'test'});
  t.ok(log instanceof Log, 'log created successfully');

  t.doesNotThrow(() => log.group('test-group')(), '.group() - initiation works');
  t.doesNotThrow(() => log.log(1, 'test0')(), 'logging to group works');
  t.doesNotThrow(() => log.groupEnd('test-group')(), '.groupEnd() - ending group works');
  t.end();
});

test('Log#log(functions2)', t => {
  const log = new Log({id: 'test'});
  t.ok(log instanceof Log, 'log created successfully');
  t.doesNotThrow(() => log.log(() => 'test')(), 'log.log works');
  t.doesNotThrow(() => log.log(0, '() => test')(), 'log.log works');
  t.end();
});

test('Log#once', t => {
  const log = new Log({id: 'test'});
  t.ok(log instanceof Log, 'log created successfully');
  t.doesNotThrow(() => log.once('test')(), 'log.once works');
  t.doesNotThrow(() => log.once(0, 'test')(), 'log.once works');
  t.end();
});

test('Log#warn', t => {
  const log = new Log({id: 'test'});
  t.ok(log instanceof Log, 'log created successfully');
  t.doesNotThrow(() => log.warn('test')(), 'log.warn works');
  t.end();
});

test('Log#error', t => {
  const log = new Log({id: 'test'});
  t.ok(log instanceof Log, 'log created successfully');
  t.doesNotThrow(() => log.error('test')(), 'log.error works');
  t.end();
});

test('Log#table', t => {
  const log = new Log({id: 'test'});
  t.ok(log instanceof Log, 'log created successfully');
  t.doesNotThrow(() => log.table(0, {a: {c: 1}, b: {c: 2}})(), 'log.table works');
  t.doesNotThrow(() => log.table(0, {a: {c: 1}, b: {c: 2}})(), 'log.table(columns) works');
  t.end();
});
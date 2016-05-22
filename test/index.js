const t = require('tape');


t.test('run closure', t => {
  t.test('simple', t => {
    require('../zdist/simple/vxq').test();
    t.end();
  });

  t.test('debug', t => {
    require('../zdist/debug/vxq').test();
    t.end();
  });

  t.test('prod', t => {
    require('../zdist/prod/vxq').test();
    t.end();
  });

  t.end();
});

t.test('run index', t => {
  require('..').test();
  t.end();
});

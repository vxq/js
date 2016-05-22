const t = require('tape');


t.test('run closure', t => {
  t.test('simple', t => {
    require('../zdist/simple/vxq').test(true);
    t.end();
  });

  t.test('debug', t => {
    require('../zdist/debug/vxq').test(true);
    t.end();
  });

  t.test('prod', t => {
    require('../zdist/prod/vxq').test(true);
    t.end();
  });

  t.end();
});

t.test('run index', t => {
  require('..').test(true);
  t.end();
});

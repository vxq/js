const t = require('tape');


t.test('run closure', t => {
  t.test('debug', t => {
    require('../dist/debug').test();
    t.end();  
  });
  
  t.test('prod', t => {
    require('../dist/prod').test();
    t.end();
  });

  t.end();
});

t.test('run index', t => {
  require('..').test();
  t.end();
});

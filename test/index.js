const t = require('tape');


t.test("run closure", t => {
  t.test("prod", t => {
    require('../dist/closed/prod');
    t.end();
  });

  t.test("debug", t => {
    require('../dist/closed/debug');
    t.end();  
  });

  t.end();
});

t.test("run typescript", t => {
  require('../dist/typed');
  t.end();
});
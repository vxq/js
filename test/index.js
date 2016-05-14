const t = require('tape');


t.test("closure binary", t => {
  t.test("run prod", t => {
    const vxqProd = require('../dist/closed/prod');
    t.end();
  });

  t.test("run debug", t => {
    const vxqDebug = require('../dist/closed/debug');
    t.end();  
  });

  t.end();
});

t.test("typescript node module", t => {
  const vqx = require('../dist/typed');

  t.equal(undefined, vqx.hello());

  t.end();
});
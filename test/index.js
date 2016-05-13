const {test} = require('tap');


test("closure-compiled vxq node module", ({test, end}) => {
  const vxqProd = require('../dist/closed/prod');

  test("verify that we can also import the debug build", ({test, end}) => {
    const vxqDebug = require('../dist/closed/debug');
    end();  
  });

  test("test hello()", ({test, end}) => {
    vxqProd.hello();
    end();  
  });

  end();
});

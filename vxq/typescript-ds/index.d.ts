interface IVxqExports {
  hello():void;
}

class Module {
  exports:IVxqExports;
}

declare var module:Module;

declare var vxq:Object;
declare var goog:Object;

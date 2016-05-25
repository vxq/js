goog.provide('goog.exportProperty');
goog.provide('goog.exportSymbol');
goog.provide('goog.global');


let goog = goog || {};


/**
 * @return {!Object}
 * @suppress {undefinedVars}
 * @private
 */
function getGlobal_() {
  return (
      typeof window === 'object' && window ? window :
      typeof global === 'object' && global ? global :
      typeof this === 'object'   && this   ? this   :
      {}
  );
}


/** @const */
goog.global = getGlobal_();



goog.exportProperty = (
  /** !Object */ object,
  /** string */ name,
  /** * */ value
) => {
  object[name] = value;
};


goog.exportSymbol = (
  /** string */ delimitedName,
  /** * */ value,
  /** !Object= */ object=undefined
) => {
  const names = delimitedName.split('.');
  let /** !Object */ target = object || goog.global;

  if (!target) {
    throw new Error(`Cannot exportSymbol on ${target}.`);
  }

  for (let i = 0; i < names.length; i++) {
    const name = names[i];

    if (i === names.length - 1) {
      target[name] = value;
      break;
    }

    if (!(typeof target[name] === 'object' && target[name])) {
      target[name] = {};
    }

    target = target[name];
  }
};
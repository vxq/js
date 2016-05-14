class Asserts {
  assert(condition, message=undefined) {
    if (!condition) {
      throw new Error(message);
    }
  }

  equals(expected, actual) {
    this.assert(expected === actual, `${expected} !== ${actual}`);
  }
}

exports = new Asserts;

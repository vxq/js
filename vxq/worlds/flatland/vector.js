goog.module('vxq.worlds.flatland.Vector');


const debug = goog.require('vxq.debug');



/** A finite 2D vector in flatland. */
class Vector {
  constructor(/** number */ x, /** number */ y) {
    debug.assert(
        Number.isFinite(x),
        `x = ${x} must be a finite number`);
    debug.assert(
        Number.isFinite(y),
        `y = ${y} must be a finite number`);

    /** @const */
    this.x = x;

    /** @const */
    this.y = y;
  }

  /** @return {number} The directionless magnitude of this vector. */
  magnitude() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }

  /** @return {!Vector} A unit vector with the same direction as this vector. */
  direction() {
    return this.withMagnitude(1);
  }

  /**
   * @return {!Vector} A vector with the same direction as this but a different
   * magnitude.
   */
  withMagnitude(/** number */ magnitude) {
    debug.assert(
        Number.isFinite(magnitude),
        `magnitude = ${magnitude} must be a finite number`);

    const currentMagnitude = this.magnitude();
    if (currentMagnitude !== 0) {
      return this.scale(magnitude / currentMagnitude);
    } else {
      return V(0, 0);
    }
  }

  /** @return {!Vector} A new vector by scaling this vector. */
  scale(/** number */ factor) {
    debug.assert(
        Number.isFinite(factor),
        `magnitude = ${factor} must be a finite number`);

    if (factor == 0 || (this.x == 0 && this.y == 0)) {
      return V(0, 0);
    } else {
      return V(factor * this.x, factor * this.y);
    }
  }

  /** @return {!Vector} A new Vector by adding another Vector. */
  add(/** Vector */ other) {
    return V(this.x + other.x, this.y + other.y);
  }

  /** @return {!Vector}  A new Vector by subtracting another Vector. */
  subtract(/** Vector */ other) {
    return V(this.x - other.x, this.y - other.y);
  }

  /**
   * @return {!Vector} A new Vector by adding the specified values to each
   * component.
   */
  addXY(/** number */ x, /** number */ y) {
    return V(this.x + x, this.y + y);
  }

  /** @override */ toString() {
    return `V(${this.x}, ${this.y})`;
  }
}


const V = Vector.V = (x, y) => new Vector(x, y);


exports = Vector;

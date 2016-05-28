goog.module('vxq.Vector2D');


const debug = goog.require('vxq.debug');



/**
 * A finite 2D vector in flatland with constant .z=0.
 * @implements {VXQ.Vector3D}
 */
class Vector2D {
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

    /** @const */
    this.z = 0;
  }

  static from(/** !VXQ.Vector2D */ vector) {
    return new Vector2D(vector.x, vector.y)
  }

  /** @return {number} The directionless magnitude of this vector. */
  magnitude() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }

  /** @return {!Vector2D} A unit vector with the same direction as this vector. */
  direction() {
    return this.withMagnitude(1);
  }

  /**
   * @return {!Vector2D} A vector with the same direction as this but a different
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

  /** @return {!Vector2D} A new vector by scaling this vector. */
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

  /** @return {!Vector2D} A new Vector2D by adding another Vector2D. */
  add(/** Vector2D */ other) {
    return V(this.x + other.x, this.y + other.y);
  }

  /** @return {!Vector2D}  A new Vector2D by subtracting another Vector2D. */
  subtract(/** Vector2D */ other) {
    return V(this.x - other.x, this.y - other.y);
  }

  /**
   * @return {!Vector2D} A new Vector2D by adding the specified values to each
   * component.
   */
  addXY(/** number */ x, /** number */ y) {
    return V(this.x + x, this.y + y);
  }

  /** @override */ toString() {
    return `V(${this.x}, ${this.y})`;
  }
}


/** @return {!Vector2D} A new vector with the specified coordinates. */
const V = Vector2D.V = (/** number */ x, /** number */ y) => new Vector2D(x, y);


exports = Vector2D;

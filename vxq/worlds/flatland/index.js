goog.module('vxq.worlds.flatland');
/**
 * @fileoverview A 2D world with some minimal physics.
 */

const World = goog.require('vxq.worlds.flatland.World');
const Unit = goog.require('vxq.worlds.flatland.Unit');
const Vector = goog.require('vxq.Vector2D');
const {V} = Vector;


exports = {World, Unit, Vector, V};

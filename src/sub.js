/**
 * sample.js : my first sample project on eclipse.
 *
 */

/**
 * Table class lib.
 * @class has Table access methods.
 * @constructor
 * @param {Number} n top row.
 * @param {Number} m top left col.
 * @param {Number} x last row.
 * @param {Number} z last right col.
 * @return {Object} Table class object.
 *
 */
var table = function(n, m, x, z) {
  MyApp.subname = n + 'subSub';

  return {name: n + m + x + 'table'};
};

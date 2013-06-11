/**
 * sample.js : my first sample project on eclipse.
 *
 */

/**
 * Table class lib.
 * @name WIL.Spreadsheet.Table
 * @class has Table access methods.
 * @constructor
 * @param {Number} n top row
 * @param {Number} m top left col
 * @param {Number} x last row
 * @param {Number} z last right col
 * @returns {Object} Table class object.
 *
 */
WIL.Table = function(n, m, x, z) {
	MyApp.__subname__ = n + "subSub";
	return {name: n + m + x + "table"};
};



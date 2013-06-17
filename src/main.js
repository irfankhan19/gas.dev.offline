/**
 * sample.js : my first sample project on eclipse.
 *
 */

/**
 * My Application namespace.
 *
 */
var MyApp = MyApp || {};

/**
 * My Application main
 *
 */
MyApp.main = (function() {
	/**
	 * Main function of my application.
	 * @param {Number} num of hogehoge.
	 * @return {String} foo text string.
	 */
	'use strict';

	var C = function(n) {
		MyApp.__name__ = n +  d;              //    'mainだぞ。main';
		return MyApp.__name__ + 9;           //    'hello!   main';
	};

	/**
	 * Rows Header class
	 * @constructor
	 * @return {RowHeaderClass}
	 * @see MyApp.main
	 */
	C.RowsHeader = function() {
		return { content: null };
	};

	return C;
})();

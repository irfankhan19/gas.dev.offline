

/**
 * Sub class.
 * @constructor
 * @param {string} n
 * @param {number} a
 */
var Sub = function(n, a) {
  this.name = n;
  this.age = a;
  this.walkCount = 0;
};


/**
 *
 */
Sub.prototype.walk = function() {
  this.walkCount++;
};

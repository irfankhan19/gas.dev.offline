

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
 * @param {number} n
 */
Sub.prototype.walk = function(n) {
  this.walkCount += n;
};

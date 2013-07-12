/*
 *  this lib.js includes no JsDoc notations.
 */
function Lib(age, mile) {
  this.mile = mile;
  this.age = age;
  return mile * age;
}


Lib.prototype.get = function() {
  return this.age * this.mile;
};


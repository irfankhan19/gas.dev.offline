/*
 *  this lib.js includes no JsDoc notations.
 */
function Lib(age, mile) {
  this.mile = mile;
  this.age = age;
  return mile * age;
}


Lib.prototype.get = function() {
  var i;

  for (i=0; i<100; i++) {
    this.mile += this.age + 2;
  }

  return this.age * this.mile;
};


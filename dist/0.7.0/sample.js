/*
sample:
version 0.7.0
build 6 - 2013/07/17 23:41:17
Copyright (c) 2013 Tsuyoshi Kodama

The MIT License (MIT)

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

function a() {
  return 'aaa';
}


function main() {

  var name = 'foo',
      age = 10;

  var s = new Sub(name + a(), age);
  var l = new Lib(1, 2, 3);

  return s.walk(l.get());
}





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



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




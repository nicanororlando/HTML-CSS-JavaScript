function b() {
  console.log(myVar); // It returns 1
}

function a() {
  var myVar = 2;
  b();
}

var myVar = 1;
a();

function a() {
  function b() {
    console.log(myVar); // Output: 2
  }
  var myVar = 2;
  b();
}
var myVar = 1;
a();

// TODO Bad approach:
b(); // log: function b()
console.log(a); // log: undefined

var a = "Hello World!";

function b() {
  console.log("Called b!");
}

/* The execution context is created in two phases:
 * 1. Creation phase: 
    - Global object
    - this
    - Outer environment
    - Hoisting: The memory space for variables and Functions.
        * All variables in Js are initially set to undefined.
        * Functions are sitting in memory entirety.
 */

// * Good approach:
var a = "Hello World!";

function b() {
  console.log("Called b!");
}

b(); // log: function b()
console.log(a); // log: a: "Hello World!"

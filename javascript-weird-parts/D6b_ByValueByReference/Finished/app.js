// by value (primitives)
var a = 3;
var b;

b = a;
a = 2;

console.log(a);
console.log(b);

// by reference (all objects (including functions))
var c = { greeting: 'hi' };
var d;

d = c;
c.greeting = 'hello'; // mutate

console.log(c); // Object {greeting: "hello"}
console.log(d); // Object {greeting: "hello"}

// by reference (even as parameters)
function changeGreeting(obj) {
    obj.greeting = 'Hola'; // mutate   
}

changeGreeting(d);
console.log(c); // Object {greeting: "hola"}
console.log(d); // Object {greeting: "hola"}

// equals operator sets up new memory space (new address)
c = { greeting: 'hola' };
console.log(c); // Object {greeting: "howdy"}
console.log(d); // Object {greeting: "hola"}
function greet(whattosay) {
   return function(name) {
       console.log(whattosay + ' ' + name);
   }
}

// The first function will run and finish. The ex context will finish too. It returns a function.
var sayHi = greet('Hi');    
// After the ex context finish we call the internal function. 
sayHi('Tony');

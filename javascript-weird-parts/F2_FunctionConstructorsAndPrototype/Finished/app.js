function Person(firstname, lastname) {
    console.log(this);          // Person{firstName, lastName, __proto__}
    this.firstname = firstname;
    this.lastname = lastname;
    console.log('This function is invoked.');
}

Person.prototype.getFullName = function() {
    return this.firstname + ' ' + this.lastname;   
}

var john = new Person('John', 'Doe');
console.log(john.getFullName);  // John Doe

var jane = new Person('Canor', 'Orlando');
console.log(jane.getFullName);  // Canor Orlando

Person.prototype.getFormalFullName = function() {
    return this.lastname + ', ' + this.firstname;   
}

console.log(john.getFormalFullName());





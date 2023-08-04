function Person(firstname, lastname) {
    console.log(this);  // Person{firstName, lastName, __proto__}
    this.firstname = firstname;
    this.lastname = lastname;
    console.log('This function is invoked.');
}

var john = new Person('John', 'Doe');
console.log(john);      // Person{firstName, lastName, __proto__}

var jane = new Person('Jane', 'Doe');
console.log(jane);
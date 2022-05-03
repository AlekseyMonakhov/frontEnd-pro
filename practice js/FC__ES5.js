/// Functions - Constructors 

const PersonFC = function(firstName, lastName, age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
};

PersonFC.prototype.sayHi = function () {
    console.log(`Hi, im ${this.firstName} ${this.lastName}`);
};
PersonFC.prototype.sayBye = function () {
    console.log(`${this.firstName} ${this.lastName} says goodbye`);
};

const busya = new PersonFC ("Busya", "Bubi", 27);
console.log(busya);
console.log(busya.sayHi());
const leva = new PersonFC ("Lev", "Levik", 26);
console.log(leva);
console.log(leva.sayHi());
console.log(leva.sayBye());

/// Extend from PersonFC to WebDeveloper -----------------------------------


const WebDeveloper = function (firstName, lastName, age, skills) {
    PersonFC.apply(this, arguments);
    this.skills = skills;
};
console.log(WebDeveloper.prototype);
WebDeveloper.prototype = Object.create(PersonFC.prototype);
console.log(WebDeveloper.prototype.constructor);
WebDeveloper.prototype.constructor = WebDeveloper;
console.log(WebDeveloper);


WebDeveloper.prototype.develope = function (ticketNumber){
    console.log(`${this.firstName} working on ticket ${ticketNumber}`);
};

const developer = new WebDeveloper("Jonh", "Joe", 45, ["Html", "Css", "Js"]);

console.log(developer);
developer.sayHi();
developer.develope("Svc - 898");
developer.sayBye();

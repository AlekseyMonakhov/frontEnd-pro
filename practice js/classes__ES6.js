/// Classes ES6


class Person1 {
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    sayHi = function () {
        console.log(`Hi, im ${this.firstName} ${this.lastName}`);
    }
}

const person = new Person1("Leontin", "Mona", 27)
console.log(person);
console.log(person.sayHi());

const person1 = new Person1("Buba", "Kusaet", 27)
console.log(person1);
console.log(person1.sayHi());


/// extend From Person 1 to WebDeveloper

class WebDeveloper extends Person1 {
    constructor (firstName, lastName, age, skills) {
        super(firstName, lastName, age);
        this.skills = skills;
    }
    develope(ticketNumber){
        console.log(`${this.firstName} working on ticket ${ticketNumber}`);
    };
}
const developer = new WebDeveloper("Jonh", "Joe", 45, ["Html", "Css", "Js"]);

console.log(developer);
developer.sayHi();
developer.develope("Svc - 898");

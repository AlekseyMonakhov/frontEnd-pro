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









// class Hero {
//     constructor(name) {
//         this.name = name;
//     }
//     logName = () => {
//         console.log(this.name);
//     };
// }

// let ab = new Hero("Alex");
// ab.logName();

// class SuperHero extends Hero {
//     constructor(name, lastname) {
//         super(name);
//         this.lastname = lastname;
//     }
//     logSuperName = () => {
//         console.log(`im ${this.name} ${this.lastname}`);
//     }
// }

// let abb = new SuperHero("alex", "ge");
// abb.logName();
// abb.logSuperName();

// console.log(ab);
// console.log(abb);

function Hero(name) {
    this.name = name;
}
Hero.prototype.logName = function () {
    console.log(this.name);
}

let a = new Hero("alex");
console.log(a);
a.logName();

function SuperHero(name, lastName) {
    Hero.apply(this, arguments);
    this.lastName = lastName;
}
SuperHero.prototype = Object.create(Hero.prototype);
SuperHero.prototype.constructor = SuperHero;
SuperHero.prototype.saySuperName = function () {
    console.log(`${this.name + this.lastName} is Super HERO`);
}
let b = new SuperHero("Aleksey", "Monakhov");
console.log(b);
b.logName();
b.saySuperName();
console.log(b instanceof Hero);
console.log(b.hasOwnProperty(""));

let ab = {
    a: () => console.log(this),
    b() { return console.log(this) },
}
ab.a()
ab.b()


class Ab {
    constructor(name) {
        this.name = name;
    }
    a = () => console.log(this);
    b = function () {
        return console.log(this);
    }
}

let test = new Ab("leo");
test.a()
test.b()
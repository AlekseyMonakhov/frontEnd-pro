/// -------ES3
function sayHi(){
    console.log(`Hi, im ${this.firstName} ${this.lastName}`);
};
function personConstructor (firstName, lastName, age) {
    return {
        firstName,
        lastName,
        age,
        sayHi,
    }
}

const person1 = personConstructor("Leo", "Mona", 27);

console.log(person1);
console.log(person1.sayHi());



/// ---------------ES5

const Person = {
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        return this;
    },
    sayHi () {
        console.log(`Hi, im ${this.firstName} ${this.lastName}`);
    },
};



const a = Object.create(Person).constructor("Bob", "Mayers", 37);
console.log(a);
console.log(a.sayHi());

const b = Object.create(Person).constructor("Leontin", "Massi", 42);
console.log(b);
console.log(b.sayHi());

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
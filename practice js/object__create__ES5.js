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

//// ---- extend from Person to webDeveloper

const webDeveloper = Object.create(Person);
webDeveloper.constructor = function (firstName, lastName, age, skills) {
    Person.constructor.apply(this, arguments);
    this.skills = skills;
    return this;
};

webDeveloper.develop = function (ticketNumber){
    console.log(`${this.firstName} working on ticket ${ticketNumber}`);
};

const developer = Object.create(webDeveloper).constructor("Jonh", "Joe", 45, ["Html", "Css", "Js"]);
console.log(developer);
developer.develop(`AB-830`);
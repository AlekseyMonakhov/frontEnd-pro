//Object Create

const PerosnTest = {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        return this;
    },
    sayHi() {
        console.log(`Hi, im ${this.firstName} ${this.lastName}`)
    }
};

const test = Object.create(PerosnTest).constructor("leo", "mona", 25);
console.log(test);
const WebDev = Object.create(PerosnTest);
WebDev.constructor = function (firstName, lastName, age, skills) {
    PerosnTest.constructor.apply(this, arguments);
    this.skills = skills;
    return this;
}
const testWebDev = Object.create(WebDev).constructor("leoni", "monakos", 28, "js");
console.log(testWebDev, "hello");




/// Functions - Constructors 

const PersonFC = function (firstName, lastName, age) {
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

const busya = new PersonFC("Busya", "Bubi", 27);
console.log(busya);
console.log(busya.sayHi());
const leva = new PersonFC("Lev", "Levik", 26);
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


WebDeveloper.prototype.develope = function (ticketNumber) {
    console.log(`${this.firstName} working on ticket ${ticketNumber}`);
};

const developer = new WebDeveloper("Jonh", "Joe", 45, ["Html", "Css", "Js"]);

console.log(developer);
developer.sayHi();
developer.develope("Svc - 898");
developer.sayBye();

//-----------------------------------------------------------------------------TESTING

let arr = { 0: "a", 1: "b", 2: "c", 3: "d", 4: "e", length: 5 };
console.log(Array.prototype.slice.call(arr));
console.log(Array.from(arr));

arr.__proto__ = Array.prototype;
console.log(arr);
let bArr = new Map(Object.entries(arr));
for (const i of bArr) {
    console.log(i);
}

bArr.delete("length");
let newObj2 = new Set([...bArr].map((el) => el[1]))
let newObj = Object.fromEntries(bArr.entries());
console.log(newObj);
console.log([...newObj2]);
let t = {
    a: 0,

}
t.hello = function () {
    let a = 1
    return (() => {
        this.a += a
    })();
}
console.log(t.hello());
const a = {
    ['hello' + 'world']: '12345',
    [Symbol.for('test')]: '1234567',
}


let si = Symbol("id");
let si1 = Symbol.for("id");
let si2 = Symbol.for("id");
console.log(si2 === si1);

let ab = {
    [si]: 1,
    [si1]: 2,
}
console.log(Object.getOwnPropertySymbols(ab));
console.log(ab);
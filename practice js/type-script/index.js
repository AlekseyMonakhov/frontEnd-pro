"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let myNum;
myNum = 'Hello world';
document.addEventListener('click', (events) => {
    console.log(events);
});
async function greet(myNum) {
    return parseFloat(myNum);
}
const myValue = String(greet(myNum.toString()));
myValue.includes('some');
class Myclass1 {
    constructor(joke) {
        this.joke = joke;
    }
    printJoke() {
        console.log(this.joke);
    }
}
let x = (data) => {
    return data + "4";
};
x('44');
let myNam = 25; //implicit type
const myName = 'hello world';
let myAge;
myAge = 24;
//don't use any in ts
function joke(joke) {
    console.log(joke);
}
joke(myAge);
let myNum1 = 25;
let mySome;
let car;
car = 25;
function check(car) {
    if (typeof car === "number") {
        return car.toFixed(22);
    }
    else if (typeof car === "string") {
        return car.includes('hello');
    }
}
check(car);
function gogo(name) {
    throw new Error();
}
const person = {
    name: 'noto',
    lastName: 'nakamura',
    age: 42,
};
const person2 = {
    name: 'Lol',
    lastName: 'Horo',
    age: 25
};
console.log(person2);

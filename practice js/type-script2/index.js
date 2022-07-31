"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let mySome;
function greet(name) {
    return `hellor ${name}`;
}
//data
const exampleOfForm = {
    login: "myLogin",
    password: "myPassword",
    confirmPassword: "myPassword",
    email: "myEmail",
    lol: "hello",
};
function register(data, time) {
    console.log(data);
    if (data.lol) {
        console.log(data.lol);
    }
}
register(exampleOfForm, 1);
let myArr = [];
myArr.push(exampleOfForm);
const message = {
    message: "hello",
    author: exampleOfForm,
    style: 'bold',
};
var ErrorTypes;
(function (ErrorTypes) {
    ErrorTypes["NotAddedItem"] = "NotAddedItem";
    ErrorTypes["NotEnoughtSpace"] = "NotEnoughtSpace";
})(ErrorTypes || (ErrorTypes = {}));
const tuple = ["bob anders", "math", ErrorTypes.NotAddedItem, 90];
class Myclass {
    constructor(person, data, data1) {
        this.person = person;
        this.data = data;
        this.data1 = data1;
    }
    do() {
        return this.person;
    }
}
const myObj = new Myclass('hello', 3, 4);
console.log(myObj);
class BaseClass {
}
class MysecondClass extends BaseClass {
    constructor() {
        super();
    }
    yes(status) {
        return status ? `yes` : `no`;
    }
    no(checkData) {
        return checkData ? `yes1` : `no1`;
    }
}
function print(repgen) {
    return repgen.yes(false);
}
class Observ {
    constructor(value) {
        this.value = value;
    }
    getValue() {
        return this.value;
    }
}
const numberObser = new Observ(`string`);
const numberObser1 = new Observ(4);
numberObser.getValue();
numberObser1.getValue();

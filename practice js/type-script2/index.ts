import {base} from "airtable";

let mySome: number | string | boolean | null | undefined | bigint | Function | any | unknown | void | never;


function greet(name: unknown): string {
    return `hellor ${name}`
}


//shape
interface myForm {
    login: string,
    password: string,
    confirmPassword: string,
    email: string,

    [key: string]: unknown,

    subscribe?: boolean, // не обязательное поле
}

//data


const exampleOfForm: myForm = {
    login: "myLogin",
    password: "myPassword",
    confirmPassword: "myPassword",
    email: "myEmail",
    lol: "hello",
}

function register(data: myForm, time: number): void { // параметр по умолчанию
    console.log(data)
    if (data.lol) {
        console.log(data.lol);
    }
}

register(exampleOfForm, 1);


// Arrays
type TextStyle = 'bold' | 'italic';
let myArr: myForm[] = [];
myArr.push(exampleOfForm);


interface Message {
    message: string;
    author: myForm;
    style: TextStyle;
}

const message: Message = {
    message: "hello",
    author: exampleOfForm,
    style: 'bold',
}

enum ErrorTypes {
    NotAddedItem = "NotAddedItem",
    NotEnoughtSpace = "NotEnoughtSpace",

}

const tuple: [string, string, ErrorTypes, number] = ["bob anders", "math", ErrorTypes.NotAddedItem, 90];


class Myclass {
    constructor(
        public person:string,
        private data: number,
        protected data1:number
    ) {}

    do():string {
        return this.person;
    }
}


const myObj = new Myclass('hello', 3, 4);
console.log(myObj);


abstract class BaseClass {
    public abstract yes(status: boolean): string;
    public abstract no(checkData: boolean): string;
}
class MysecondClass extends BaseClass {
    constructor() {
        super();
    }

    yes(status: boolean): string {
        return status ?`yes`: `no`;
    }

    no(checkData: boolean): string {
        return  checkData ? `yes1` : `no1`;
    }
}


function print(repgen:BaseClass):string {
    return repgen.yes(false);
}

class Observ<T> {
    constructor(
       public value: T
    ) {}
    getValue():T {
        return this.value;
    }
}

const numberObser = new Observ<string>(`string`);
const numberObser1 = new Observ<number>(4);
numberObser.getValue();
numberObser1.getValue();
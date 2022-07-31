import * as events from "events";

let myNum:string;
myNum = 'Hello world';

document.addEventListener('click',(events) => {
   console.log(events);
})
async function greet(myNum: string):Promise<number> {
   return parseFloat(myNum);
}
const myValue :string = String(greet(myNum.toString()));
myValue.includes('some');


class Myclass1{
   joke:string;
   constructor(joke:string) {
      this.joke = joke;
   }
   printJoke() {
      console.log(this.joke)
   }
}
let x = (data:string):string => {
   return data + "4";
}
x('44');


let myNam = 25; //implicit type
const myName = 'hello world';

let myAge:number;
myAge = 24;
//don't use any in ts

function joke(joke:number):void {
   console.log(joke)
}

joke(myAge);


let myNum1 = 25;
let mySome: number | string | boolean | null | undefined | bigint | Function | any | unknown | void | never;
let car: number;
car = 25;
function check(car:unknown): string | boolean | undefined {
   if(typeof car === "number") {
      return    car.toFixed(22);
   }else if(typeof  car === "string") {
      return car.includes('hello');
   }
}

check(car);
function gogo(name: string):never {
   throw new Error();
}

const person = {
   name: 'noto',
   lastName: 'nakamura',
   age: 42,
}
interface person {
   name: string,
   lastName: string,
   age: number
}

const person2: person = {
   name: 'Lol',
   lastName: 'Horo',
   age: 25
}

console.log(person2)
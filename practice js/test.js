// // let x = 10;
// // let y = 20;
// // console.log(`${x} and ${y}`);
// // // old version
// // // let c =y;
// // // y=x;
// // // x=c;
// // [x,y] = [y,x];
// // console.log(`${x} and ${y}`);
// let test =123;
// console.log(typeof(test));

// let num = new Number (123);
// let num1 =  Number (123);
// let num2 =  123;
// console.log(num.toFixed(5));
// console.log(num);
// console.log(num1.toFixed(5));
// console.log(num1);
// console.log(num2.toString());
// console.log(num1 === num);
// console.log(num2 === num);
// console.log(num1 === num2);
// console.log(typeof(num));
// console.log(typeof(num1));
// console.log(typeof(num2));
// console.log(num1 === test);


// let str = new String("Privet");
// console.log(str);
// let s = new Boolean("1");
// console.log(s);
// myLet = 0;
// console.log(myVar);
// console.log(myLet);
// var myVar = 5;
// let myLet = 15;
// console.log(null === false);
// console.log(null === true);
// console.log(undefined === false);
// console.log(undefined === true);
// console.log(null == undefined);
// const ku = 4;
// console.log(ku);
// a = "nameTest"
// let testarr =[];
// let arr = ["buba", "leva", "ananas", "siga"];
// console.log(arr);
// arr[arr.length] = "bobby";
// arr[`lets try ${a}`] = "test";

// for (let index = 0; index < arr.length; index++) {
//     if (index % 2) {
//         testarr.unshift(arr[index] + " Even");
//         delete arr[index];
        
//     }else {
//         arr[index] = arr[index] + " Odd";
//     }
    
// }
// console.log(arr);
// console.log(testarr);
// console.log(arr);
// arr.forEach(function (name , index){
//     if (index % 2) {
//         testarr.unshift(`${name} Even`);
//         delete arr[index];
                
//     }else {
//         arr[index] = arr[index] + " Odd";
//     }
// });
// console.log(arr);
// console.log(testarr);

// for (let index = 0; index < 10; index++) {
//     console.log(`Привет ${index}`);
    
// }

// for( item of [1,2,3,4,5,6,7,8,9]) {
//     console.log(item);
// }
// function hellow (name) {
//     let a = `privet ${name}`
//     return a; 
// }

// console.log(hellow(`Leo`));

// arr = [1,2,3,4,5,6, "привет я Лео"];
// let a = arr.map((el, index) =>  {
//     if(el % 2) {
//         return arr[index] = `${el} is odd`;    
//     }else {
//         return arr[index] = `${el} is even`;  
//     }
// });
// console.log(a);

// console.log(!!(13%5));
// let a = function (arr) {
//     i = 0
//     while (i<arr.length) {
//         if (arr[i] === 'привет я Лео' ){
//             console.log(`hellow we found it on index ${i}`);
//             break
//         }else {
//             alert(`not found on index ${i}`)
//         }
//         i++;

//     }
// }
// a(arr);


// let firstName = `leo`;
// let a = function (firstName) {
//     console.log(`Hellow ${firstName}`);
//     return (firstName) => console.log(`Hellow ${firstName}, Im inner func`);
// }

// a(firstName)(firstName);

// function callMeBack(callback) {
//     const randomNumber = Math.random();
//     callback(randomNumber);
// }
// callMeBack((param) => {
//     console.log(`Hellow, value is ${param}`);
// });

// var a = 20;
// if (true) {
//     var a = 25;
// }
// console.log(a);


// for ( var i = 0; i<5; i++) {
//     setTimeout(() => console.log(i));
// }

// const func = function() {
//     let i = 0;
//     return function() {
//         return i++;
//     }
// }

// let closerFunc = func();
// console.log(closerFunc());
// console.log(closerFunc());
// console.log(closerFunc());
// console.log(closerFunc());
// console.log(closerFunc());
// console.log(closerFunc());


// const server = (requestData, callback) => {
//     console.log(`server recived ${requestData}`);
//     setTimeout(() => {
//         callback (`200 ok`);
//     }, 6000);
    
// };

// function sendRequest (data, callback) {
//     const preparedData = JSON.stringify(data);
//     server(preparedData, (responce)=> {
//         callback(parseInt(responce) === 200 ? `Evrething is good`: `Something whent wrong`);
//     });
// }

// sendRequest({name: "Leo", age: 27}, (responce) => {
//     console.log(`client resive responce:${responce}`);
// })


// function object(name, age, interest) {
//     return {
//         name,
//         age,
//         interest,
//     }
// }


// console.log(object("Leo", 25, "Js"));


// const numbers = [1,2,3,4,5,6,7,8,9];
// // let a = numbers.map((el) => `num is ${el}`);
// // console.log(a);
// console.log(numbers.reduce((prev, num)=> {
//     console.log(prev * num);
//     return num*prev;
// },numbers[0]));

// let person = {
//     name : 'Leo',
//     age: 27,
//     sayHi(name) {
//         return `Hellow ${name}`;
//     }
// };

// console.log("age" in person);


// console.log(coor);


// const person = {};

// person.name = "Leo-webdev";

// const webDeveloper = Object.create(person);

// console.log(webDeveloper.name);


// let simpleObj = Object.create(null);

// console.log(simpleObj);
// const coor = Object.create({name: "Leo" , x:5});

// // coor.x = 10;
// coor.y = 20;
// console.log(coor.hasOwnProperty(`x`));


// Object.defineProperty(person, "_gender", {
//     value: "male",
//     enumerable: false,
//     writable: true,
//     configurable: false,
// }) 

// for (let key in person) {
//     console.log(key);
// }


// console.log(person._gender= "male");
// console.log(person);


// function a() {
//     let a = 10;
//     return function () {
//         return a--;
//     }
// }
// let b = a();
// let c = a();
// let d = a();

// for (let index = 0; index < 10; index++) {
//     console.log(b());
//     console.log(c());
//     console.log(d());    
// }


// let person = {
//     firstName: `Leo`,
//     lastName: `Mona`,
//     arias: {
//         Home: ["js"],
//         work: ["JS"],
//     },
//     age: 27,
//     sayHi(){
//         console.log(`Hi, im ${this.firstName} ${this.lastName}`);
//     }
// };




/// -------ES3
// function sayHi(){
//     console.log(`Hi, im ${this.firstName} ${this.lastName}`);
// };
// function personConstructor (firstName, lastName, age) {
//     return {
//         firstName,
//         lastName,
//         age,
//         sayHi,
//     }
// }

// const person1 = personConstructor("Leo", "Mona", 27);

// console.log(person1);
// console.log(person1.sayHi());



// /// ---------------ES5

// const Person = {
//     constructor(firstName, lastName, age){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;
//         return this;
//     },
//     sayHi () {
//         console.log(`Hi, im ${this.firstName} ${this.lastName}`);
//     },
// };



// const a = Object.create(Person).constructor("Bob", "Mayers", 37);
// console.log(a);
// console.log(a.sayHi());

// const b = Object.create(Person).constructor("Leontin", "Massi", 42);
// console.log(b);
// console.log(b.sayHi());

// /// Functions - Constructors 

// const PersonFC = function(firstName, lastName, age){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
// };

// PersonFC.prototype.sayHi = function () {
//     console.log(`Hi, im ${this.firstName} ${this.lastName}`);
// };
// PersonFC.prototype.sayBye = function () {
//     console.log(`${this.firstName} ${this.lastName} says goodbye`);
// };

// const busya = new PersonFC ("Busya", "Bubi", 27);
// console.log(busya);
// console.log(busya.sayHi());
// const leva = new PersonFC ("Lev", "Levik", 26);
// console.log(leva);
// console.log(leva.sayHi());
// console.log(leva.sayBye());

// class Person {
//     constructor(firstName, lastName, age){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;
//     }
//     sayHi = function () {
//         console.log(`Hi, im ${this.firstName} ${this.lastName}`);
//     }
// }

// const person = new Person("Leontin", "Mona", 27)
// console.log(person);
// console.log(person.sayHi());


// ///-----------------ES6

// // && const --- block scoped variables , var ---- function scoped variable
// const firstName = "Bob";
// const dynamicPropertyName = "age";

// const myObj = {
//     firstName,
//     [dynamicPropertyName]: 23,
// };
// console.log(myObj[dynamicPropertyName]);
// console.log(myObj.age);


// //------------- значение по умолчанию в функциях 

// function hellow (firstName = `Ale`, lastName = `Handro`) {
//     return `Hellow ${firstName + lastName}`
// }

// console.log(hellow());


// /// Тегирование строк 
// const firstName1 = "Anne";
// console.log();

// function tag(literals, ...substitutions) {
//     console.log(literals);
//     console.log(substitutions);
//     return `Lol there is ${substitutions[0]} ${substitutions[1]} Horsing around`;    
// }
// console.log(tag`Hellow ${firstName1} ${"Hornet"}`);

// /// -------------destrucruring ES6
// const arr = [1,2,3,4,5,6,7,8,9];

// const [first, second, ...rest] = arr;
// console.log(first , second);
// console.log(rest);
// /// set default value
// const simpleTwo = [1,2];
// let [one, two, free = 15] = simpleTwo;
// console.log(one, two, free);
// /// ----- Nested Array
// const nestedArray = [[1,2,3], [4,5,6]];
// const [[firstElem], [fourElem]] = nestedArray;
// console.log(firstElem, fourElem);
// //
// let x = 10;
// let y = 20;
// // let temp = x;
// // x = y;
// // y = temp;
// [x, y] = [y , x];
// console.log(x , y);


// const pointPosition = [10, 10, 0];
// function describetPosition ([x, , z]) {
//     return `pointPosition in 3D space is following X:${x} Z:${z}`
// }
// console.log(describetPosition(pointPosition));



// //// Objects destruction 
// const somePony = {
//     name: "Rainbow Pony",
//     position: {x: 10, y: 20, z: 0},
//     ditection: {x: 0, y: 1, z: 0},
//     rotation: {x: 10, y: 12, z: 25}
// };

// const {name, position: ponyPosition} = somePony;
// console.log(name, ponyPosition);


// const {position: {x: ponyPositionX}} = somePony;
// console.log(ponyPositionX);

// const {rotation = {x:0 , y:0, z:0,}} = somePony; // set default value
// console.log(rotation);

// const person = {
//     name: "Bob",
//     lastName: "Garison",
//     address: {
//         line1: "st.Shevchenko",
//         line2: "building 12",
//         some: {
//             a: 10,
//             b: 20,
//         },
//     },
// };

// const {address:{line2 : building, some: {a: privet}}} = person;
// console.log(building, privet); 


// const a = 5;
// const obj = {b:10};


// let symbolIdFirst = Symbol("id"); // $wkjdfn1k4ubr1u4hri1uouho  = {description: id }
// let symbolIdSecond = Symbol("id"); // $sfadfkjladfbkahkjfba20943nkji3  = {description: id }
// console.log(symbolIdFirst === symbolIdSecond); //false because tokens are not equal 
// const myObject = {
//     [symbolIdFirst]: 1,
//     value: 'My custom value',
//     [symbolIdSecond]: 100,
// };
// console.log(myObject);

// /// not only string can by key in object , also symbol


// const idSymbol = Symbol.for("id"); //srdaj;nfa;djsnf324;jnr2
// const idSymbolSecond = Symbol.for("id"); //srdaj;nfa;djsnf324;jnr2
// console.log(idSymbol === idSymbolSecond); /// true because id alredy exist as a Symbol;
// console.log(Symbol.keyFor(idSymbolSecond));
// for (var i = 0; i <= 1; i++) {
// 	setTimeout( () => {
// 	console.log(i);
// }, 10);
// }  why 2 2 ?
// for (var i = 0; i <= 1; i++) {
// 	( () => {
// 	console.log(i);
// })();
// }
// When true, moving the mouse draws on the canvas
// When true, moving the mouse draws on the canvas

// const title = document.querySelector('h1');
// const colors = ['#D705F2', '#3805F2', '#68F205', '#EAF205', '#F20505'];

// document.onmousemove = function () {
//   title.style.color = colors[Math.floor(Math.random() * colors.length)];   
// };
const result = 1.1e2;
console.log(result);
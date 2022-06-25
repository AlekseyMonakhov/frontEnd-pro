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
//     console.log(`se > ver recived ${requestData}`);
//     setTimeout( > ) => {
//         callback (`200 ok`);
//     }, 6000);

// };

// function sendRequest (Erorr, callback) {
//     const preparedData = JSON.stringify(Erorr);
//     server(preparedData, (responce)=> {
//         callback(pars
//  Promise status are : PENDING, FULFILLED, REJECTED.eInt(responce) === 200 ? `Evrething is good`: `Something whent wrong`);
//     });
//  Promise status are : PENDING, FULFILLED, REJECTED.
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
// const someData = new Map();
// someData.set(`1`, `value`);
// someData.set(1, `value of 1 number key`);
// someData.set(`2`, `value`);
// someData.set(`3`, `value`);
// someData.set(4, `value`);
// someData.set(true, `значение под булевым ключем`);
// console.log(someData.size);
// console.log(someData.get(1));
// console.log(someData.get(`1`));
// console.log(someData.has(`3`)); //true
// someData.clear();
// console.log(someData.size);


// console.log(someData);

// const uniq = new Set ();
// uniq.add(1);
// uniq.add(2);
// uniq.add(3);
// uniq.add(4);
// uniq.add(4);
// uniq.add(4);
// uniq.add(5);
// uniq.add(5);

// console.log(Array.from(uniq.values()).forEach(el=>console.log(el)));
// let obj = {
//     a: 100,
//     b: 200,
// }
// function hellow (c) {
//     return this.a + this.b +c;
// };

// let arr = [10,20,30,40];

// let hellow1 = function(c) {
//     return this.a + this.b +c;
// }
// console.log(hellow1.call(obj, 10));



// let body = document.querySelector(`body`);

// function updateText(name) {
//     let p = document.createElement(`p`);
//     let text = `hellow my name is ${name}`;
//     let textP = text.split(" ");
//     console.log(textP);
//     for(let i =0; i<textP.length; i++){
//         textP[i] = textP[i].charAt(0).toUpperCase() + textP[i].slice(1);
//     }
//     let b = textP.join(" ");
//     p.textContent = b;





//     body.append(p);
//     function add() {
//         p.classList.add(`show`);
//         p.style.position = "fixed";
//         p.style.top = 50 + "px";
//         p.style.right = 50 + "px";

//     };

//     setTimeout(add,500);
// }

// // setTimeout(updateText,100,`Leo`);
// const uniq = new Set ();
// uniq.add(1);
// uniq.add(2);
// uniq.add(3);
// uniq.add(4);
// uniq.add(4);
// uniq.add(4);
// uniq.add(5);
// uniq.add(5);
// const values = uniq.values();

// console.log([...values].forEach(el => console.log(el)));
// console.log(uniq);

// const secondPromise = new Promise((resolve, reject) => {
//     const succsesLoad = false;
//     succsesLoad ? resolve(`done`) : reject(`erorr`);

// });

// secondPromise
// .then(mes => console.log(mes))
// .catch(err  => console.log(err))
// .finally(() => console.log(`Finnaly`));


// let i = 1;
// Promise.resolve(`Великолепные данные`)
//     .then((data) => {
//         console.log(`Старт записи`);
//         return data ;
//     })
//     .then((data) => {
//         console.log(`Запись данных: ` + data);
//         return data;
//     })
//     .finally(() => {
//         console.log(`Запись оконченна`);
//     })

// const asyncPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(`End`)
//     }, 2000);
// });

// asyncPromise.then((data) => console.log(data));
// delay(4000).then(()=>console.log(123));

// const asyncProm = async() => {
//     try{
//         console.log(`start`);
//         await delay(2000);
//         console.log(`run`);
//         const responce = await new Promise((resolve) =>{
//             setTimeout(()=> resolve(`Hellow`),1000);
//         })
//         console.log(`Result ` + responce);
//     }catch(err){
//         console.log(err);
//     }finally {
//         console.log(`Finaly`);
//     }
// };
// asyncProm();



// const returnData = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(`Данные переданы`);
//         }, 2000);
//     });
// }

// const getAsyncData = async () => {
//     try {
//         throw `Ужас , ошибка`;
//         const data = await returnData();
//         console.log(data);
//     } catch (err) {
//         console.log(err);
//     } finally {
//         console.log(`Finally`);
//     }
// };
// console.log(getAsyncData());

// Promise.resolve(`Hello`).then((data) => console.log(data));
// let prom = new Promise((resolve, reject) => {
//     resolve(`Hello in other way`)
// });
// prom
//     .then(el => console.log(el));

// // Promise.reject(`Eroor`).catch((data) => console.log(data));
// let prom2 = new Promise((_, reject) => {
//     reject(`Eroor23`);
// });
// prom2.then(()=>{},err => console.log(err));
// prom2.catch(err => console.log(err));

// const num = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(4);
//     },1000);
// });
// num.then(el => console.log(el));

// async function num1() {
//    let a = await num;
//    console.log(a + `dadada`);
// }
// num1();

// Promise.resolve(4).then(el => setTimeout(()=> console.log(el),2000));
// let prom2 = new Promise((_, reject) => {
//     reject(`Eroor23`);
// });
// prom2.then(
//     (()=>{}),
//     (err => {
//         console.log(err)
//         return `Hi ` + err;
//     }))
//     .then(data => console.log(data))

// let cont = document.querySelector(`.div`);

// function add(id, title) {
//     let h3 = document.createElement(`h3`);
//     let p = document.createElement(`p`);
//     h3.textContent = id;
//     p.textContent = title;
//     cont.append(h3,p);

// }


// const toDo = fetch('https://jsonplaceholder.typicode.com/todos')
//     .then(response => response.json())
//     .then((data) => {
//         data.forEach(element => {
//             add(element.id, element.title)
//         });
//         return data.filter(el => el.id === 2);
//     })
//     .then(data => console.log(...data));

// async function one(url) {
//     let responce = await fetch(url);

//     let foto = await responce.json()
//     .then(el => el.filter(el => el.albumId === 1 && el.id === 1))

//     console.log(foto);
// }
// one(`https://jsonplaceholder.typicode.com/photos`);

// async function create() {
//     let responce = await fetch(`https://jsonplaceholder.typicode.com/photos`);
//     let url = await responce.json()
//         .then(el => el.find(el => el.id === 1))
//         .then(({ url: fotoUrl }) => fotoUrl);


//     let img = document.createElement(`img`);
//     img.style = `position:fixed;top:10px;left:10px;width:100px;`;
//     document.body.append(img);

//     img.src = url;

//     setTimeout(() => {
//         img.remove();
//         URL.revokeObjectURL(img.src);
//     }, 3000);
// }

// create();

// cars = [];

// function carCreate (num) {
//   availabelCars = {
//     model: ["X1", "X2", "X3"],
//     brand: ["Tesla", "BMW", "Ford"],
//     price: ["Large", "Medium", "Small"],
//     color: ["red", "blue", "green"],
//     age: ["1year", "3years", "5years"],
//   };
//   do {
//     myCar ={};
//     for (let key in availabelCars) {
//       let value = prompt(`enter ${key} value`, `${availabelCars[key]}`);
//       if (availabelCars[key].includes(value)) {
//         myCar[key] = value;
//       } else {
//         alert(`Wrong value: ${key}`);
//       }
//     }
//     cars.push(myCar);    

//   } while (--num); 
// };

// carCreate(2);
// console.log(cars);



// function carMade () {
//     let availabelModels = {
//         Tesla: [`X5`, `X6`,`X7`,`X8`,`X9`,`X10`,],
//         Ford: [`X5`, `X6`,`X7`,`X8`,`X92`,`X10`,],
//         Mus: [`X5`, `X6`,`X7`,`X8`,`X91`,`X10`,],
//         Zaz: [`X5`, `X6`,`X7`,`X8`,`X93`,`X10`,],
//         Bnw: [`X5`, `X6`,`X7`,`X8`,`X94`,`X10`,],
//     }
//     let chose = ``;
//     function hellow() {
//         chose = prompt(Object.keys(availabelModels), `What model`);
//         if(!Object.keys(availabelModels).includes(chose)) hellow();
//     }
//     hellow()
//     if(Object.keys(availabelModels).includes(chose)) {
//         let model = ``;
//         function by () {
//             model = prompt(availabelModels[chose].join(`, `), `enter model you whant`);
//             if(!availabelModels[chose].includes(model)) by();
//         }
//         by()
//         if(availabelModels[chose].includes(model)) {
//             return `Nice choise, you chose ${chose}, model ${model}`
//         }
//     }

// }
// console.log(carMade());

// let json = {
//     "name": "Aleksey",
//     "lastName": "Leos",
//     "age": "30",
// }

// let err = new Error(`erorr`);


// class MyError extends Error {
//     constructor(message) {
//       super(message);
//       this.name = this.constructor.name;
//     }
//   }
  
//   class ValidationError extends MyError { }
  
//   class PropertyRequiredError extends ValidationError {
//     constructor(property) {
//       super("Нет свойства: " + property);
//       this.property = property;
//     }
//   }
// try{
//     throw new MyError(`ell`)
//     throw new PropertyRequiredError(`Field Name`)
// }catch(err){
//     console.log(err.message);
// }



// const a = [];
// console.log(Array.isArray(a));


// console.log(Array.from([1,2,3,4,5,6,7,8,9], (x,y) => console.log(x,y)));


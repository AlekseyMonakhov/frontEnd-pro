// let arrFunc = () => {
//   console.log(this);
// };

// arrFunc();

// console.log(hello());

// let myObj = {
//   a: 1,
//   c: 2,
//   b() {
//     return (() => {
//         return (() =>  this)()
//     })();
//   },
// };
// console.log(myObj.b());

function Person(name, lastName, age) {
  this.name = name;
  this.lastName = lastName;
  this.age = age;
}

Person.prototype.sayHi = function () {
  console.log(`Hello from ${this.name} ${this.lastName}`);
};

let jo = new Person("Jo", "Bod", 23);
console.log(jo);
jo.sayHi();

function Developer(name, lastName, age, skill) {
  Person.apply(this, arguments);
  this.skill = skill;
}
Developer.prototype = Object.create(Person.prototype);
Developer.prototype.constructor = Developer;

let bibi = new Developer("bibi", "jabe", 22, "js");
console.log(bibi);
bibi.sayHi();

Object.defineProperty(bibi, "jor", {
  value: "da",
  enumerable: true,
  writable: false,
  configurable: false,
});

bibi[Symbol.iterator] = function () {
  let counter = 0;
  return {
    next: () => {
      let value = Object.keys(this);
      value = value[counter++];
      return { value, done: !value };
    },
  };
};

for (const i of bibi) {
  console.log(i);
}

let test = {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    return this;
  },
  sayHi() {
    console.log(`${this.name} hellos you`);
  },
};

let jams = Object.create(test).constructor("Jary", 28);
console.log(jams);
jams.sayHi();

let nTest = Object.create(test);
nTest.constructor = function (name, age, lastName) {
  test.constructor.apply(this, arguments);
  this.lastName = lastName;
  return this;
};
let janny = Object.create(nTest).constructor("janny",27, "ford");
console.log(janny);
janny.sayHi()


function hh() {
  console.log(this.name + "sas hello to you");
}

function hhh (name) {
  return {
    name,
    hh,
  }
}


let aa= hhh("jo")
console.log(aa);

aa.hh();
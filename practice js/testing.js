const a = {
  name: "alex",
  lastName: "mona",
  _age: 0,
  get fullName() {
    return `${this.name} ${this.lastName}`;
  },
  set age(value) {
    if (value < 10) {
      this._age = value;
    }
  },
  hello() {
    return `${this.fullName}`;
  },
};
let b = {};
Object.assign(b, a);

let c = JSON.parse(JSON.stringify(a));
console.log(a === b);
console.log(a.fullName);
console.log(b.fullName);
a.age = 9;
b.age = 9;
console.log(a);
console.log(b);
// function isIsogram(str){
//     let arr = new Set(str.split("").map(el => el.toLowerCase()));
//     return arr.size === str.length;
// }
// console.log(isIsogram("Aleksey"));

var d = 2;

function joke() {
  console.log(d);
  var d = 3;
  return ((num = 0) => d + num)();
}
console.log(joke());
console.log(d);

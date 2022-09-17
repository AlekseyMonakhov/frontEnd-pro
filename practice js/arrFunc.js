// let arrFunc = () => {
//   console.log(this);
// };

// arrFunc();

// console.log(hello());

let myObj = {
  a: 1,
  c: 2,
  b() {
    return (() => {
        return (() =>  this)()
    })();
  },
};
console.log(myObj.b());


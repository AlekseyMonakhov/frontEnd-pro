// let arr = [1, 3, [3, 4, [4]], [[[[[[4],3]]]]]];

// function flat(arr) {
//   let res = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (Array.isArray(arr[i])) {
//       res.push(...flat(arr[i]));
//     } else {
//       res.push(arr[i]);
//     }
//   }
//   return res;
// }

// console.log(flat(arr));


// let obj = [
//     {name: "alex", age: 27, skills: "js"},
//     {name: "alex1", age: 271, skills: "js"},
//     {name: "alex2", age: 272, skills: "js"},
//     {name: "alex3", age: 273, skills: "js"},
//     {name: "alex4", age: 274, skills: "js"},
// ]


// let x  = obj.map(el => {
//     let keys = Object.keys(el);
//     return {
//         [keys[0]] : el[keys[0]],
//         [keys[keys.length - 1]] : el[keys[keys.length - 1]]
//     }
// })

// console.log(x);

// for(let i = 0; i < 10; i++) setTimeout(() => console.log(i), 1000)
var a = 4;
function hello () {
    return ++this.a 
}

let aa = {
    a: 111,
    hello
}

console.log(aa.hello());
console.log(aa.hello());
console.log(aa.hello());
console.log(aa.hello());
console.log(aa.hello());


function see () {
    console.log(this);
}

see.bind(aa)();
see()
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
let a = 1;
function lock() {
    var arr = [];
    arr[0] = "Jani";
    arr[1] = "Hege";
    arr[2] = "Stale";
    arr[3] = "Kai Jim";
    arr[4] = "Borge";
   return function (name="leo") {
    let trueArr = arr.splice(arr.length/2,0,name)
    console.log(arr);
   }
}

lock()("garri")

const readyArray = [45, 12, 54, 23];
readyArray.splice(2, 0, 60);
console.log(readyArray);

var arr = [];
arr[0] = "Jani";
arr[1] = "Hege";
arr[2] = "Stale";
arr[3] = "Kai Jim";
arr[4] = "Borge";

console.log(arr.join());
console.log(arr);
arr.splice(2, 0, "Lene");
console.log(arr.join());


function lolo () {
    let arr = "<p></p>"
    return function (userName = "leo") {
        let trueArr = arr.split("");
        trueArr.splice(trueArr.length/2,0,userName);
        return trueArr.join("");
    }
}

lolo()(" userName")
console.log(lolo()(" myName"))

document.body.innerHTML += lolo()("alex");
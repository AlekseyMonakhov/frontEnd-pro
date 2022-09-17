import {hello as privet} from "./hello.js";
console.log(privet("leo"));

let a = {
    name:"leo",
    age: "28",
}



function hello(name,age) {
    console.log(Object.entries({name,age}));
}

hello("leo", 27)
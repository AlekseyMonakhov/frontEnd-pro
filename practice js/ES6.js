///-----------------ES6

// && const --- block scoped variables , var ---- function scoped variable
const firstName = "Bob";
const dynamicPropertyName = "age";

const myObj = {
    firstName,
    [dynamicPropertyName]: 23,
};
console.log(myObj[dynamicPropertyName]);
console.log(myObj.age);


//------------- значение по умолчанию в функциях 

function hellow (firstName = `Ale`, lastName = `Handro`) {
    return `Hellow ${firstName + lastName}`
}

console.log(hellow());


/// Тегирование строк 
const firstName1 = "Anne";
console.log(firstName1);

function tag(literals, ...substitutions) {
    console.log(literals);
    console.log(substitutions);
    return `Lol there is ${substitutions[0]} ${substitutions[1]} Horsing around`;    
}
console.log(tag`Hellow ${firstName1} ${"Hornet"}`);

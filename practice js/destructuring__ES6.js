/// -------------destrucruring ES6
const arr = [1,2,3,4,5,6,7,8,9];

const [first, second, ...rest] = arr;
console.log(first , second);
console.log(rest);
/// set default value
const simpleTwo = [1,2];
let [one, two, free = 15] = simpleTwo;
console.log(one, two, free);
/// ----- Nested Array
const nestedArray = [[1,2,3], [4,5,6]];
const [[firstElem], [,five]] = nestedArray;
console.log(firstElem, five);
//
let x = 10;
let y = 20;
// let temp = x;
// x = y;
// y = temp;
[x, y] = [y , x];
console.log(x , y);


const pointPosition = [10, 10, 0];
function describetPosition ([x, , z]) {
    return `pointPosition in 3D space is following X:${x} Z:${z}`
}
console.log(describetPosition(pointPosition));



//// Objects destruction 
const somePony = {
    name: "Rainbow Pony",
    position: {x: 10, y: 20, z: 0},
    ditection: {x: 0, y: 1, z: 0},
    rotation: {x: 10, y: 12, z: 25}
};

const {name, position: ponyPosition} = somePony;
console.log(name, ponyPosition);


const {position: {x: ponyPositionX}} = somePony;
console.log(ponyPositionX);

const {rotation = {x:0 , y:0, z:0,}} = somePony; // set default value
console.log(rotation);

const person = {
    name: "Bob",
    lastName: "Garison",
    address: {
        line1: "st.Shevchenko",
        line2: "building 12",
        some: {
            a: 10,
            b: 20,
        },
    },
};

const {address:{line2 : building, some: {a: privet}}} = person;
console.log(building, privet); 
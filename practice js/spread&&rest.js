// ... iterable ------SPREAD operator
// function sum () {
//     return Array.prototype.reduce.call(arguments, (prev, next) => prev + next, 0)
// };

const arr = [32,12,12,12,342,34,23,4,23,42,34,2,34,23,4,234,23,4];
// console.log(sum(...arr));


/// REST OPERATOR 
function sum (first, second,  ...values) {
    return values.reduce((prev, next) => prev + next, first + second);
};
const anotherArr = [...arr];
console.log(sum(10,20,30,40));
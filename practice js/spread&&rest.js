// ... iterable ------SPREAD operator
// function sum () {
//     return Array.prototype.reduce.call(arguments, (prev, next) => prev + next, 0)
// };

const arr = [32,12,12,12,342,34,23,4,23,42,34,2,34,23,4,234,23,4];
// console.log(sum(...arr));
const anotherArr = [...arr];


/// REST OPERATOR 
function sum (first, second,  ...values) {
    return values.reduce((prev, next) => {
        let sum = prev + next;
        let firstAndSecondSum = first +second;
        return `${sum} + ${firstAndSecondSum} = ${sum + firstAndSecondSum}`;
    });
};
console.log( sum(10,20,30,40));


var a = 10;
if(true) {
    var a = 20;
}

console.log(a);
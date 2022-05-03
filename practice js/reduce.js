const numbers = [1,2,3,4,5,6,7,8,9];
// let a = numbers.map((el) => `num is ${el}`);
// console.log(a);
console.log(numbers.reduce((prev, num)=> {
    console.log(prev * num);
    return num*prev;
},numbers[0]));
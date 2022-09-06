const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let a = numbers.map((el) => `num is ${el}`);
// console.log(a);
console.log(numbers.reduce((prev, num) => {
    return prev + num;
}));



function count(numbers) {
    let result = 0;
    for (const iterator of numbers) {
        result += iterator;
    }
    console.log(result);
    return result;

}
count(numbers);

((numbers)=> {
    let result = 0;
    for (const iterator of numbers) {
        result+= iterator;
    }
    console.log(result);
    return result;
})(numbers);//or 




((numbers)=> {
    let result = 0;
    for (const iterator of numbers) {
        result+= iterator;
    }
    console.log(result);
    return result;
},(numbers));//or 

function hello (num) {
    let result = 0;
    for (let index = 0; index < num.length; index++) {
        result += num[index];
    }
    return result;
}

console.log(hello(numbers));
(function(num) {
    let result = 0;
    for (let index = 0; index < num.length; index++) {
        result += num[index];
    }
    console.log(result);
    return result;
})(numbers);
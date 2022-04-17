

function calc () {
    let iterations = Number(prompt(`enter iter`));
    
    if(iterations){
        do {
            let first = Number(prompt(`enter first`));
            let operator = (prompt(`enter operator`));
            let second = Number(prompt(`enter second`));
            if(operator === "+" && operator) {
                 alert(`${first+second}`)
            } else if (operator === "-" && operator) {
                 alert(`${first-second}`)
            } else if (operator === "*" && operator) {
                 alert(`${first*second}`)
            } else if (operator === "/" && operator) {
                 alert(`${first/second}`)
            } else {
                alert(`wrong input value`)
            }
    
        }while(--iterations);
    }else{
        alert(`Wrong iteratinons`)
    }
 
};

calc();





  
// let cyclesSum = parseInt(prompt('введите количество вычислений которое Вы хотите сделать'));
// while (cyclesSum) {
    
//     let firstValue = parseInt(prompt("Значение 1")),
//     secondValue = parseInt(prompt("Значение 2")),
//     operator = prompt("Оператор");

//     if (!firstValue) {
//         alert('empty first value field');
//         firstValue = null;
//     }
//     if (!secondValue) {
//         alert('empty second value field');
//         secondValue = null;
//     }

//     switch (operator) {
//         case "+": {
//             result = firstValue + secondValue;
//             break;
//         }
//         case "-": {
//             result = firstValue - secondValue;
//             break
//         }
//         case "*": {
//             result = firstValue * secondValue;
//             break
//         }
//         case "/": {
//             result = firstValue / secondValue;
//             break
//         }
            
//         default: {
//             alert(`Мы не можем выполнить действие с оператором ${operator}`);
//             break;
//         }
//     }
//         console.log(`Результат: ${firstValue} ${operator} ${secondValue} = ${result} `);
//         cyclesSum--;
// }
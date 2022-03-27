





  
let cyclesSum = parseInt(prompt('введите количество вычислений которое Вы хотите сделать'));
while (cyclesSum) {
    
    let firstValue = parseInt(prompt("Значение 1")),
    secondValue = parseInt(prompt("Значение 2")),
    operator = prompt("Оператор");

    if (!firstValue) {
        alert('empty first value field');
        firstValue = null;
    }
    if (!secondValue) {
        alert('empty second value field');
        secondValue = null;
    }

    switch (operator) {
        case "+": {
            result = firstValue + secondValue;
            break;
        }
        case "-": {
            result = firstValue - secondValue;
            break
        }
        case "*": {
            result = firstValue * secondValue;
            break
        }
        case "/": {
            result = firstValue / secondValue;
            break
        }
            
        default: {
            alert(`Мы не можем выполнить действие с оператором ${operator}`);
            break;
        }
    }
        console.log(`Результат: ${firstValue} ${operator} ${secondValue} = ${result} `);
        cyclesSum--;
}
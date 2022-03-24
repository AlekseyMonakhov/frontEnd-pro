let firstValue = parseInt(prompt("Значение 1")),
secondValue = parseInt(prompt("Значение 2")),
operator = prompt("Оператор");
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
    }
        
    default: {
        alert(`Мы не можем выполнить действие с оператором ${operator}`);
        break;
    }
}
if (Boolean(firstValue) === false) {
    alert('empty first value field');
}
if (Boolean(secondValue) === false) {
    alert('empty second value field');
}



console.log(`Результат: ${firstValue} ${operator} ${secondValue} = ${result} `);
  

let firstValue = parseInt(prompt("Значение 1")),
secondValue = parseInt(prompt("Значение 2")),
operator = prompt("Оператор"),
result = parseInt();
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
        alert(`"Мы не можем выполнить действие с оператором ${operator}`);
        break;
    }
}

console.log(`Результат: ${firstValue} ${operator} ${secondValue} = ${result} `);
  

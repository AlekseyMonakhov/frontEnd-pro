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
        alert(`Не верно указан оператор`);
        break;
    }
}

console.log(`${firstValue} ${operator} ${secondValue} = ${result} `);
  

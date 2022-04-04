function checkNumber() {
    const inputNumber = parseInt(prompt("Укажиье число", ));
    if (inputNumber) {
        let even = isEven(inputNumber);
        let prime = isPrime(inputNumber);
        alert(`${even} а также ${prime}`);
    }else {
        alert("Не правильно указанно число");
    }
}
function isEven(number){
    return number % 2 === 0 ? `Число ${number} четное` : `Число ${number} не четное`;
}

function isPrime(number) {
    for (let i = 2; i < number; i++) {
      if (number % i === 0) return `Число ${number} непростое`;
    }
    return `Число ${number} простое`;
  }
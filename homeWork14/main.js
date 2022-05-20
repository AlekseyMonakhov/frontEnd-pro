const btnContainer = document.querySelector(`.buttons`);
const output = document.querySelector(`.calc-screen output`);
const math = [];
let number = ``;
let result = 0;
let operator = [`/`, `*`, `+`, `-`,`=`];

// формула не должна начинатся или заканчиватся оператором 
// не должно быть два оператора подряд или (оператор не может быть отдельным елементом массива)
// number может заканчиватся оператором , в намбер может быть только одна точка
function calc(event) {

};


btnContainer.addEventListener(`click`, (event) => {
        
    let inputValue = event.target.textContent;

    if(!event.target.classList.contains(`btn`)){
        return;
    };
    
    number += inputValue;
    if(!result) {
        if(operator.includes(number)) {
        number = ``;
        return;
        }

        if(event.target.classList.contains(`operator`) ) {
            math.push(number.slice(0,-1));
            math.push(number.slice(-1));
            number = ``;
            console.log(math);
        }
    }else {
        if(operator.includes(math[math.length-1]) && operator.includes(number)) {
            number = ``;
            return;
        }
        if(event.target.classList.contains(`operator`) && number.length === 1) {
            math.push(number);
            number = ``;
            console.log(math);
        }
        if(event.target.classList.contains(`operator`) && number.length > 1) {
            math.push(number.slice(0,-1));
            math.push(number.slice(-1));
            number = ``;
            console.log(math);
        }
    }
    
    if(event.target.classList.contains(`equal`)) {
        result = eval(math.join(``).slice(0,-1));
        math.length = 0;
        math[0] = result;
        console.log(result);
        console.log(math);
    }
    
});

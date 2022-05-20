const btnContainer = document.querySelector(`.buttons`);
const output = document.querySelector(`.calc-screen output`);
const math = [];
let number = ``;
let result = 0;
let operator = [`/`, `*`, `+`, `-`,`=`];

function clearAll(event) {
    if(event.target.classList.contains(`ac`)) {
        math.length = 0;
        result = 0;
        number = ``;
        output.textContent = math.join(``);
    }
}
function calc(event) {
    let inputValue = event.target.textContent;
    
    if(inputValue.search(/[^0-9*/+-.=]/mi)!= -1) {
        return;
    }

    if(!event.target.classList.contains(`btn`)){
        return;
    };
    
    number += inputValue;
    output.textContent = number;
    if(!result) {
        if(operator.includes(number)) {
        number = ``;
        return;
        }

        if(event.target.classList.contains(`operator`)) {
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
    
    if(event.target.classList.contains(`equal`) && math.some((el) => operator.slice(0,-1).includes(el))) {
      
        result = eval(math.join(``).slice(0,-1));
        math.length = 0;
        math[0] = result;
        output.textContent = math.join(``);
    }
};



btnContainer.addEventListener(`click`, (event) => {
        
    calc(event);
    clearAll(event);
    
});

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
    output.textContent = math.join(``) + number;
    if(operator.includes(number)) {
        if(math.length) {
            math[math.length-1] = number;
        }
        number = ``;
        console.log(math);
    }

    console.log(number);
    if(event.target.classList.contains(`operator`) && number.length > 1){
        math.push(number.slice(0,-1));
        math.push(number.slice(-1));
        number = ``;
        console.log(math);
    }
    if(event.target.classList.contains(`equal`) && math.length) {
        result = eval(math.join(``).slice(0,-1));
        output.textContent = math.join(``) + result; 
        math.length = 0;
        number = result;
        console.log(math);
    }

};


btnContainer.addEventListener(`click`, (event) => {
    calc(event);
    clearAll(event);
    
});






















    // if(!result) {
    //     if(operator.includes(number)) {
    //     number = ``;
    //     return;
    //     }

    //     if(event.target.classList.contains(`operator`) && number.length > 1) {
    //         math.push(number.slice(0,-1));
    //         math.push(number.slice(-1));
    //         number = ``;
    //         console.log(math);
    //     }
    // }else {
    //     if(operator.includes(math[math.length-1]) && operator.includes(number)) {
    //         number = ``;
    //         return;
    //     }
    //     if(event.target.classList.contains(`operator`) && number.length === 1 ) {
    //         math.push(number);
    //         number = ``;
    //         console.log(math);
    //     }
    //     if(event.target.classList.contains(`operator`) && number.length > 1) {
    //         math.push(number.slice(0,-1));
    //         math.push(number.slice(-1));
    //         number = ``;
    //         console.log(math);
    //     }
    // }
    
    // if(event.target.classList.contains(`equal`) && !operator.slice(0,-1).includes(math[1])) {
    //     math.length = 1;
    //     console.log(math);
    //     console.log(math.length);
    // }
    // if(event.target.classList.contains(`equal`) && operator.slice(0,-1).includes(math[1])) {
    //     result = eval(math.join(``).slice(0,-1));
    //     output.textContent = math.join(``) + result;
    //     math.length = 0;
    //     math[0] = result;
    // }
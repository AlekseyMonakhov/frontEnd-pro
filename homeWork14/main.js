let calc = [];



const digit = [`1`,`2`,`3`,`4`,`5`,`6`,`7`,`8`,`9`,`.`,];
const action = [`-`, `+`, `*`, `/`];


const out = document.querySelector(`.calc-screen p`);
document.querySelector(`.buttons`).addEventListener(`click`, (event) => {
    let key = event.target.textContent;
    if(digit.includes(key)){
        calc += key;
        console.log(calc);
    }
});




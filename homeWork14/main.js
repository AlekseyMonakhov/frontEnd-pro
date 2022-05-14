const btnContainer = document.querySelector(`.buttons`);
const output = document.querySelector(`.calc-screen output`);


btnContainer.addEventListener(`click`, function(event) {
    if(!event.target.classList.contains(`btn`)) {
        return;
    }
    
    const value = event.target.textContent;
    
    switch (value) {
        case `ac`:
            output.textContent = '';
            break;
    
        case `=`:
            if(output.innerText.search(/[^0-9*/+-.]/mi)!= -1) {
                return
            }
            output.textContent = eval(output.textContent);
            break;
        default: 
            output.textContent += value;
    } 
});
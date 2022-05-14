const input = document.querySelector(`.add-item`);
const btn = document.getElementById(`btn`);
const add = document.querySelector(`.container`);
let i = 0;
btn.addEventListener(`click`, (event) => {
  if(input.value) {
    let div = document.createElement(`div`);
    let label = document.createElement(`label`);
    let check = document.createElement('input');
    div.classList.add(`toDo`);
    label.textContent = input.value;
    check.setAttribute(`type`, `checkbox`);
    label.setAttribute(`for`, `box${i}`)
    check.setAttribute(`id`, `box${i}`);
    div.appendChild(check);
    div.appendChild(label);
    add.appendChild(div);
    input.value = '';
    return ++i;
  }
});


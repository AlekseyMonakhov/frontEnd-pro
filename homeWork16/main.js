class ToDoList {
  constructor() {
    this.toDos = [];
  }
  add(todo) {
    this.toDos.push(new TodoITtem(todo));
  }
}
class TodoITtem {
  constructor(todo) {
    this.todo = todo;
  }
}
let toDoList = new ToDoList();

const input = document.querySelector(`.add-item`);
const btn = document.getElementById(`btn`);
const add = document.querySelector(`.container`);
let i = 0;
function todoListFunc() {
  let div = document.createElement(`div`);
  let label = document.createElement(`label`);
  let check = document.createElement('input');
  div.classList.add(`toDo`);
  label.textContent = input.value;
  check.setAttribute(`type`, `checkbox`);
  label.setAttribute(`for`, `box${i}`);
  check.setAttribute(`id`, `box${i}`);
  div.appendChild(check);
  div.appendChild(label);
  add.appendChild(div);
  input.value = '';
  check.addEventListener(`click`, (event)=>{
    let inputId = event.target.getAttribute(`id`);
    let label = add.querySelector(`[for=${inputId}]`);
    label.classList.toggle(`done`);
  });
}
btn.addEventListener(`click`, (event) => {
  if(input.value) {
    toDoList.add(input.value);
    console.log(toDoList.toDos);
    todoListFunc();
    return ++i;
  }
});

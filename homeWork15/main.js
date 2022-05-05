const form = document.createElement(`form`);
form.classList.add(`container`);
const h1 = document.createElement(`h1`);
const p = document.createElement(`p`);
const input = document.createElement(`input`);
const btn = document.createElement(`button`);

h1.innerHTML = `<strong>Aleksey Monakhov</strong>`;
p.textContent = 
`Задача: создать страницу с элементами 
<h1>, <p>, <input> и <button> без использования html, 
а лишь используя методы объекта window.document. 
В заголовке <h1> должны быть ваше имя и фамилия, 
в <p> - текст задания, которое вы сейчас выполняете. 
В <input> можно что-то ввести, если нажать на кнопку 
то будет выведен alert c введенным в поле значением 
и после закрытия alert'а поле будет очищаться.`;
input.placeholder = `Type something`;
btn.style.width = `fit-content`;
btn.style.height = btn.style.width;
btn.innerText = `Click on me`;
btn.type = `reset`;

function append () {
  for (let index = 0; index < arguments.length; index++) {
   console.log(arguments[index]);
   form.appendChild(arguments[index]);
  }
};
append(h1, p, input, btn);

document.body.appendChild(form);

btn.addEventListener(`click`, () => {
  alert(input.value);
});


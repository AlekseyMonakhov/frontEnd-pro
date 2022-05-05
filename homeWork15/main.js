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
btn.style.width = `15vw`;
btn.style.height = `5vw`;
btn.innerText = `Click on me`;
btn.type = `reset`;


form.appendChild(h1);
form.appendChild(p);
form.appendChild(input);
form.appendChild(btn);

document.body.appendChild(form);

btn.addEventListener(`click`, () => {
  alert(input.value);
});


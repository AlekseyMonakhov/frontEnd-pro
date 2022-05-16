const container = document.querySelector(`.container`);
const out = document.querySelector(`output`);
let counter = 121212;
out.textContent = counter;

container.addEventListener(`click`, (event) => {
  let clickObj = event.target.className;
  switch (clickObj) {
    case `add`:
      ++counter;
      break;
    
    case `minus`:
      --counter;
      break;

    case `reset`:
      counter = 0;
      break;

    default:
      break;
  }
  out.textContent = counter;
  console.log(counter);
});
let div = document.getElementsByClassName("root");
console.log(div);
console.log(Array.from(div));
console.log(Array.prototype.slice.call(div))
let newDiv = new Set(div);

let h1 = document.createElement("h1");
h1.textContent = "Hello World";
div[0].append(h1);
div[0].setAttribute("data", false);
let counter = 0;

h1.addEventListener("click", (ev) => {
    let newDiv = document.createElement("div");
    newDiv.textContent = `Its new div ${++counter}`;
    newDiv.onclick = ({ target: { textContent: text } }) => {
        newDiv.remove();
        console.log(`div ${text.length === 13 ? text.slice(-1) : text.slice(-2)} removed`);
    };
    div[0].append(newDiv);
}, { once: false })


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

Promise.resolve(4).then(el => setTimeout(() => console.log(el), 2000));
let a = new Promise(async (res, rej) => {

    let timer = await new Promise((res, rej) => {
        let luck = Math.fround(Math.random() * 3);
        setTimeout(() => {
            if (luck > 1) {
                res("done")
            } else {
                rej("error 12")
            }

        }, 2000)
    }).catch(err => err)
    if (timer === "done") res(timer);
    rej(timer)

}).then((data) => console.log(data)).catch(err => console.log(err)).finally(() => console.log("hahah"))

let prom = new Promise((res,rej) => {
    res(100);
});
prom.then(res => res*2).then(res => console.log(res));


Promise.all([])
Promise.allSettled([])
Promise.any([])
Promise.race([])

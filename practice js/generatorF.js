let counter = 0;
function* generator() {
    yield `hello ${++counter}`;;
    yield `hello1 ${++counter}`;;
    yield `hello2 ${++counter}`;;
    return 42
}


const test = generator(1);
console.log(test.next());
console.log(test.next());
console.log(test.next());
console.log(test.next());


function * rangeGenerator (min = 1, max = 10) {
    for (let i = 0; i < max; i++) {
        yield i;
    }
    return "done"
}
let generat = rangeGenerator();
console.log(generat.next());
console.log(generat.next());
console.log(generat.next());
console.log(generat.next());
console.log(generat.next());
console.log(generat.next());
console.log(generat.next());
console.log(generat.next());
console.log(generat.next());
console.log(generat.next());
console.log(generat.next());
console.log(generat.next());

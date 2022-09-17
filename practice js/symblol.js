let symbolIdFirst = Symbol("id"); // $wkjdfn1k4ubr1u4hri1uouho  = {description: id }
let symbolIdSecond = Symbol("id"); // $sfadfkjladfbkahkjfba20943nkji3  = {description: id }
console.log(symbolIdFirst === symbolIdSecond); //false because tokens are not equal 
const myObject = {
    [symbolIdFirst]: 1,
    value: 'My custom value',
    [symbolIdSecond]: 100,
};
console.log(myObject);

/// not only string can by key in object , also symbol


const idSymbol = Symbol.for("id"); //srdaj;nfa;djsnf324;jnr2
const idSymbolSecond = Symbol.for("id"); //srdaj;nfa;djsnf324;jnr2
console.log(idSymbol === idSymbolSecond); /// true because id alredy exist as a Symbol;
console.log(Symbol.keyFor(idSymbolSecond));
let obj = {
    0: 1,
    "name": 2,
    "lastName": 3,
    3() {
        console.log(this);
    },
    [Symbol.iterator]() {
        let count = 0;
        return {
            next: () => {
                let value = Object.keys(this);
                value.push(...Object.getOwnPropertySymbols(this));
                value = value[count++];
                return { value, done: !value }
            }
        }
    }
}



console.log(obj);
for (const i of obj) {
    console.log(i);
}
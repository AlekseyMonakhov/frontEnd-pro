const someData = new Map();
someData.set(`1`, `value`);
someData.set(1, `value of 1 number key`);
someData.set(`2`, `value`);
someData.set(`3`, `value`);
someData.set(4, `value`);
someData.set(true, `значение под булевым ключем`);
console.log(someData.size);
console.log(someData.get(1));
console.log(someData.get(`1`));
console.log(someData.has(`3`)); //true
someData.clear();
console.log(someData.size);


console.log(someData);



let ab = {
    name: "leo",
    lastName: "mona",
    NaN: "this is NaN str"
}


const a = new Map(Object.entries(ab));


console.log(a.values());
console.log(a.keys());
console.log(a.entries());
console.log(a.size);
console.log(a.has("name"));
console.log(a.get("lastName"));
console.log(a.has("NaN"));
console.log(a.get("NaN"));
console.log(a.entries());


let objFormEntries = Object.fromEntries(a);
console.log(objFormEntries);

for (const i in objFormEntries) {
    console.log(i);
    
}



console.log(a);



const uniq = new Set ();
uniq.add(1);
uniq.add(2);
uniq.add(3);
uniq.add(4);
uniq.add(4);
uniq.add(4);
uniq.add(5);
uniq.add(5);
const values = uniq.values();
console.log(values);
uniq.add('jdjdjdjd');
console.log(uniq.has("jdjdjdjd"));
uniq.delete("jdjdjdjd")
console.log(uniq.has("jdjdjdjd"));

console.log([...uniq]);
console.log(uniq);
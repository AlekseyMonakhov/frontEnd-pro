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

console.log([...values]);
console.log(uniq);
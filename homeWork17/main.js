// -------------------------first task
let arr = [1,2,14,14,15,133,2,8,12,19,8,13,123,1,2,3,4,5,6,7,7,8,9];
function arrFilt(arr) {
  return arr
  .filter((el, index, arr) => arr.indexOf(el) === index)
  .sort((a,b) => a - b);
}


console.log(arrFilt(arr));
// ---------------------------------------second task

Number.prototype.plus = function (value) {
	return this + value;
}

Number.prototype.minus = function (value) {
	return this - value;
}
console.log((2).plus(3).minus(1));

// ----------------------- anagram
let firstWord = `Ромашка, нитка, сон`;
let secondWord = 'Мошкара, нос, ткани';

function anagram(firstWord, secondWord) {
  firstWord = firstWord.toLowerCase().split('').sort().join(``);
  secondWord = secondWord.toLowerCase().split('').sort().join(``);
  return firstWord === secondWord ? `Anagram`: `not Anagram`;
}
console.log(anagram(firstWord, secondWord));

// --------------words
const words = ['orange', 'orange', 'orange', 'banana', 'banana', 'grapefruit', 'banana', 'grapefruit', 'banana'];

function solution(words) {

    let valuesMap = new Map();

    words.forEach((elem) => valuesMap.set(elem, valuesMap.has(elem) ? valuesMap.get(elem) + 1 :  1));
    let arr =  [...valuesMap.entries()].sort((a, b) => b[1] - a[1]);
    return arr.map(value => value[0]);
}

console.log(solution(words));
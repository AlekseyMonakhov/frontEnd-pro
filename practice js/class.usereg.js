class Person {
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    sayHi = function () {
        console.log(`Hi, im ${this.firstName} ${this.lastName}`);
    }
}

const person = new Person("Leontin", "Mona", 27)
console.log(person);
console.log(person.sayHi());
const persons = [];
const names = [
    {firstName: "Leo", lastName: "Brod", age: 27},
    {firstName: "Leontii", lastName: "Valis", age: 27},
    {firstName: "Bill", lastName: "Bayron", age: 28},
    {firstName: "Berserk", lastName: "Gr", age: 29},
    {firstName: "Ded", lastName: "Moroz", age: 37},
    {firstName: "Levi", lastName: "Matvei", age: 47},
    {firstName: "Don", lastName: "Pedro", age: 17},
    {firstName: "Lia", lastName: "Steet", age: 37},
    {firstName: "Buby", lastName: "Bubu", age: 21},
    {firstName: "Lovas", lastName: "Lod", age: 24},
]; 
for (let i =0; i<10; i++) {
    persons[i] = new Person(`${names[i].firstName}`, `${names[i].lastName}`, `${names[i].age}`);
}
console.log(persons);
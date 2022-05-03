/// -------ES3
function sayHi(){
    console.log(`Hi, im ${this.firstName} ${this.lastName}`);
};
function personConstructor (firstName, lastName, age) {
    return {
        firstName,
        lastName,
        age,
        sayHi,
    }
}

const person1 = personConstructor("Leo", "Mona", 27);

console.log(person1);
console.log(person1.sayHi());
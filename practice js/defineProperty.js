let person = {
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },
    set gender(value) {
        let genders = ["male", "female", "ronin"];

        if (genders.includes(value)) {
            Object.defineProperty(person, "_gender", {
                writable: true,
                configurable: true,
            })

            this._gender = value;

            Object.defineProperty(person, "_gender", {
                writable: false,
                configurable: true,
            })
        }
    }
}

Object.defineProperties(person, {
    "firstName": {
        value: 'Leo',
        enumerable: true,
        writable: true,
        configurable: true,
    },
    "lastName": {
        value: 'Mona',
        enumerable: false,
        writable: false,
        configurable: true,
    },
    "age": {
        value: '27',
        enumerable: false,
        writable: false,
        configurable: true,
    }
})

console.log(person.hasOwnProperty("firstName"));
console.log(person.age);
console.log(person.firstName = "le");
console.log(person.firstName);
console.log(person);
person.gender = "ronin";
Object.preventExtensions(person);
Object.freeze(person);
console.log(Object.isFrozen(person))
console.log(Object.getOwnPropertyDescriptor(person, "firstName"));
delete person.age;
person.olo = "hello"
person.gender = "roni1n";
console.log(person);


// console.log(Object.getOwnPropertyDescriptor(person,  "age"));
// Object.preventExtensions(person);
// console.log(Object.isExtensible(person));
// console.log(Object.getOwnPropertyDescriptor(person,  "age"));
// Object.freeze(person);
// console.log(Object.isFrozen(person));
// console.log(Object.getOwnPropertyDescriptor(person,  "age"));
// Object.seal(person);
// console.log(Object.isSealed(person));
// console.log(Object.getOwnPropertyDescriptor(person,  "age"));
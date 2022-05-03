let person = {
    firstName: `Leo`,
    lastName: `Mona`,
    age: 27,
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },
    set gender(value) {
        let genders = ["male", "female", "ronin"];
        if (genders.includes(value)) {
            this._gender = value;
        }
    }
}
Object.defineProperty(person, "_gender", {
    value: "male",
    enumerable: false,
    writable: true,
    configurable: false,
}) 

console.log(Object.getOwnPropertyDescriptor(person,  "age"));
Object.preventExtensions(person);
console.log(Object.isExtensible(person));
console.log(Object.getOwnPropertyDescriptor(person,  "age"));
Object.freeze(person);
console.log(Object.isFrozen(person));
console.log(Object.getOwnPropertyDescriptor(person,  "age"));
Object.seal(person);
console.log(Object.isSealed(person));
console.log(Object.getOwnPropertyDescriptor(person,  "age"));
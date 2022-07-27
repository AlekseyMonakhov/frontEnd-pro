let person = {
    firstName: `Leo`,
    lastName: `Mona`,
    _gender: `male`,
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
console.log(person.fullName)
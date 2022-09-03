class Person{
    #firstName;
    #lastName;
    constructor(firstName, lastName) {
        this.#firstName = Person.#validate(firstName);
        this.#lastName = Person.#validate(lastName);
    }
    getFullName(format = true) {
        return format ? this.#firstLast() : this.#lastFirst();
    }
    //private methods
    #firstLast(){
        return `${this.#firstName} ${this.#lastName}`;
    }
    #lastFirst(){
        return `${this.#lastName}, ${this.#firstName}`;
    }

    //static private methods
    static #validate(name){
        if(typeof name === 'string'){
            let str = name.trim();
            if(str.length === 3){
                return str;
            }
        }
        throw "The name must be a string with at least 3 character."
    }
}

const person = new Person("Joh", "Doe");
console.log(person.getFullName()); // Joh Doe
console.log(person.getFullName(format = false)); // Doe, Joh
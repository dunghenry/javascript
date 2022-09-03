const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25
};


for (const key in person) {
    if (person.hasOwnProperty(key)) {
       const value = person[key];
       console.log(key, value);
        
    }
}

const profile = Object.values(person);
console.log(profile);
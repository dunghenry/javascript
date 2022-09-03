const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
};

console.log(Object.entries(person)) // [ [ 'firstName', 'John' ], [ 'lastName', 'Doe' ], [ 'age', 25 ] ]

for (const key in person) {
   console.log(key) //
}

console.log(Object.keys(person)) //[ 'firstName', 'lastName', 'age' ]
// x ||= y <=> x || (x = y)
let title;
title ||= 'Oke';
console.log(title); //Oke
let title1 = 'JavaScript Awesome';
title1 ||= 'untitled';
console.log(title1); // JavaScript Awesome

// x &&= y <=> x && (x = y)
let person = {
    firstName: "Jane",
    lastName: "Doe",
}
person.lastName &&= 'Smith';
console.log(person); // { firstName: 'Jane', lastName: 'Smith' }

// x ??= y <=> x ?? (x = y)
let user = {
    username: "Satoshi",
};
user.nickname ??= 'anonymous';
console.log(user); //{ username: 'Satoshi', nickname: 'anonymous' }
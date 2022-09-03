function *gen(){
    let result = yield '2 + 2 = ?';
    alert(result);
};
let generator = gen();

let question = generator.next().value; // <-- yield returns the value
console.log(question); // "2 + 2 = ?"
// generator.next(4);

setTimeout(() => generator.next(4), 1000);
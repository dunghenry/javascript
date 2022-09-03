function* gen(){
    try {
        let result = yield "2 + 2 =?";
        alert("The execution does not reach here, because the exception is thrown above");
    } catch (error) {
        console.log(error);
    }
}
let generator = gen();
let question = generator.next().value;
console.log(question);
generator.throw(new Error("The answer is not found in myDB"));
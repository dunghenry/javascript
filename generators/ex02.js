function* generateSequence(start, end) {
  for (let i = start; i <= end; i++) yield i;
}

function *generatePasswords(){
    yield *generateSequence(48, 57);
    //for (let i = 48; i <= 57; i++) yield i;

    yield *generateSequence(65, 90);
    // for (let i = 65; i <= 90; i++) yield i;

    yield *generateSequence(97, 112);
    //for (let i = 97; i <= 122; i++) yield i;

}

let str = '';
for (let code of generatePasswords()){
    str += String.fromCharCode(code);
}
console.log(str);
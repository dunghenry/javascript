let str = 'JS will, JS will, JS will rock you.';
let newStr = str.replaceAll('JS','JavaScript');
console.log(newStr);

let str1 = 'JS will, Js will, js will rock you.';
let pattern = /js/gi;

const newString = str1.replaceAll(pattern, function (match, offset, str) {
    console.log(match); // str match
    console.log(offset); //index
    console.log(str);
    if(match === 'JS')  return "JavaScript";
    if(match === 'Js') return 'Javascript';
    if(match === 'js') return 'javascript';
    return '';
})

console.log(newString);
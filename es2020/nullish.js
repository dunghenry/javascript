// syntax value1 ?? value2 (null or undefined)
const value1 = undefined;
const value2 = "Ok";

const rs = value1 ?? value2;
console.log(rs); //oke

let result = value1;
if(result === undefined || result === null) {
    result = value2;
}
console.log(result); //oke

const age = null ?? 22;
console.log(age); // 22

const name = undefined ?? "Dung";
console.log(name); //Dung

let count;
let result1 = count || 1;
console.log(result1); //1

const count2 = 0;
const result2 = count2 || 1;
console.log(result2); //1

//nullish
const result3 = count2 ?? 1;
console.log(result3); //0

let result4 = 1 ?? console.log('Hi');
console.log(result4); //1
let result5 = undefined ?? console.log('Hi');

const result6 = (null || undefined) ?? 'OK'; 
console.log(result6); // 'OK'
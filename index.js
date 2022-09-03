'use strict';
var a = 1;
console.log(a);

function fun(){
    console.log(this); //undefined .Nếu ko có strict mode thì là window
}
fun();

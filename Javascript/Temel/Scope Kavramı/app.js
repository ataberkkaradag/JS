// Scope Kavramı



//Global scope


var value1=10;
let value2=20;
const value3=30;

function Func(){
    var value1=10;
    let value2=50;
    const value3=60;
    console.log(value1,value2,value3);
    
}
Func();

console.log(value1,value2,value3);
console.log("-----------------------------------------");


if(true){
var value1=40;
let value2=50;
const value3=60;
console.log(value1,value2,value3);
}
console.log(value1,value2,value3);







console.log("-----------------------------------------");
if(true){
    var a=10;
    let b=20;
    const c=30;
   console.log(a,b,c);

}
console.log(a);
console.log(b);
console.log(c);

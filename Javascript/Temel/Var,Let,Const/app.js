//Var

var a;
a=20;
console.log(a);

var name="Ataberk";
var name="Karadag";
console.log(name)

//Let

let isim ="Ataberk";

isim="Karadag";
console.log(isim);
// let isim birdaha deiştirilebilir ama tanımlanamaz

//Const

const age=25;
console.log(age);
// age=20; const age birdaha  değiştirielmez ve tanımlanamaz değeri tanımlandıgı satırda verilir

const x=[1,2,3,4,5];
console.log(x);

// x=[1,2,3,4,5,6] yapılamaz

x.push(6);
console.log(x); //yapılabilir



 let value;
// Veritiplerini String'e Çevirme

value=String(123);
value=String(3.14);
value= String( true);
value=String(function(){console.log()});
value=String([1,2,3,4]);

value=(10).toString();

// Veritiplerini Sayılara Çevirme
value=Number("123");
value=Number(null)
value=Number( undefined);

value=Number("3.14");
value=parseFloat("3.50");


console.log(value);
console.log(typeof value);



const y="Hello" +34;

console.log(y);
console.log( typeof y)
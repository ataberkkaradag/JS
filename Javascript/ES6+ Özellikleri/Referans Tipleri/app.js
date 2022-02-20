let a="Ataberk";
let b ="Ataberk";

if(a===b){
    console.log("Eşit");
}


let arr=[1,2,3,4];
let arr2=[1,2,3,4];

if(arr===arr2){
    console.log("arrEşit");
}  //Obje veri tipleride arrayler gibi bir adres gösterir değerler aynı olmaz





const cities=new Map();

cities.set("Ankara",5);
cities.set("istanbul",15);
cities.set([1,2,3],"Array");//1,23 arrayını bir değişkene eşitleyip öyle kullanmamız gerekır

console.log(cities.get("Ankara"));
console.log(cities.get([1,2,3]));

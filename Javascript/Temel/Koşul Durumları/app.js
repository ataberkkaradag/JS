//Karşılaştırma Operatörleri


console.log(2==2);
console.log("js"=="java");
console.log(2=="2");
console.log(2==="2");//Değerler ve veritiplerinin eşitliğini kontrol eder
console.log(3>2);
console.log(2>3);
console.log(2 !=4);
console.log(2 !=2);
console.log(2<4);
console.log(2>=2);
console.log(2!=="2");


//Mantıksal Bağlaçlar


  //not operatörü
  console.log(!(2!=2));

  //And operatörü
  console.log((2==2)&&("Ata"=="Ata"));
  //Or operatörü
  console.log((2==3)||("Ata"=="Ata"));



const error=false;


if(error==true){
console.log("Hata oluştu");

}
else{
    console.log("Hata oluşmadı");
}



const user="Ata";

if(user==="Ata"){
    console.log("Kullanıcı bulundu");

}
else{
    console.log("Kullanıcı bulunmadı");
}



const process="1";

if(process==="1"){
console.log("1. secenek secıldı");
}
else if(process==="2"){
    console.log("2. secenek secıldı");

}
else if (process==="3"){
    console.log("3. secenek secıldı");
}
else{
    console.log("Geçersiz işlem");
}







const number=100;
if(number===100){
   console.log("Sayı 100e eşit") ;
}
else{
    console.log("Sayı 100e eşit deil");
}


//Ternary Operator

console.log(number===100 ? "Sayı 100e eşit" :"Sayı 100e eşit deil");




if(number===100) console.log("Sayı 100e eşit");
else console.log("Sayı 100e eşit deil");


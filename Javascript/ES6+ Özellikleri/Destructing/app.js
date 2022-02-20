let number1,number2;
arr=[100,200,300,400];

//number1=arr[0];
//number2=arr[1];

//Destructing

[number1,number2]=arr;


//Obje Destructing


const numbers={
   a:10,
   b:11,
   c:12,
   d:13,
   e:14

};

const {a:number3,e:number4,d:number5}=numbers;
console.log(number3,number4,number5);


// Function Destructing

const getLangs=()=>["Python","Javascript","c#"];


const [lang1,lang2,lang3]=getLangs();


const Person={
    name:"Ataberk",
    year:2000,
    salary:4000,
    showInfos:()=>console.log("bilgiler Gösteriliyor...")

}

const {name:isim,year:yıl,salary:maas,showInfos:Bilgilerigoster}=Person;

console.log(isim,yıl,maas);
Bilgilerigoster();
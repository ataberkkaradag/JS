//Fonksiyon tanımlama

function merhaba(){
    console.log("Merhaba");
}

merhaba();


function isimyas(name="Bilgiyok",age="Bİlgi yok"){
    //if(typeof name==="undefined") name="Bilgi yok";
    //if(typeof age==="undefined") age="Bilgi yok";
    console.log(`İsim: ${name} Yaş: ${age}`);
}

isimyas("ataberk",20);
isimyas();

function square(x){
    return(x*x);
}
function cube(x){
    return (x*x*x);
}


a=cube(square(5));
console.log(a);

//function expression

const sea=function(name){
    console.log(`Merhaba ${name}`);
}

sea("Ataberk");

//Immediately Invoked Function Expression((IIFE)

(function(name){
    console.log("Merhaba"+name);
})(" Ataberk");






const database={
    host:"locakhost",
    add:function(){
        console.log("Eklendi");
    },
    get:function(){
        console.log("Elde Edildi");

    },
    update:function(id){
        console.log(`Id: ${id} Güncellendi`);
    },
    delete:function(id){
        console.log(`Id: ${id} Silindi`);
    }
}

console.log(database.host);
database.add();
database.delete(10);

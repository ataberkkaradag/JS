const person={
    name:"Ataberk",
    age:20,
    salary:4000

};

const langs=["Python","C++","Php"];

const name="Ataberk";


//For In

for(let prop in person){
    console.log(prop,person[prop]); //objelerde
}



for(let index in langs){
    console.log(index,langs[index]) //Araylerde
}




for(let index in name){
    console.log(index,name[index]);  //Stringlerde
}


//For Of


      //For ofla objelerde Gezilemez


  
 
for(let value of langs){//Arraylerde
    console.log(value);
}


for(let char of name){
    console.log(char);
}
//while Döngüleri

let i=0;

while(i<10) {
    console.log(i);
    
    //i=i+1;
    //i+=1;
    i++;
}
console.log("--------------------")

let x=10;

while(i>0){
    console.log(i);
    i-=2;
}

//Break Ve Continue

console.log("--------------------")
let y=0;

while(y<10){
    console.log(i);
    if (i===5){
        break;
    }
    i++;
}
console.log("--------------------")

/*let j=0;
while(j<10){
    console.log(i);
    if (j===5){
        i++;
        continue;
    }
   
}*/

console.log("--------------------")
//Do while

let t=0;

do{
console.log(t);
t++;

}while(t<10);

console.log("--------------------")


const langs=["Python","Javascript","C#"];
let index=0;

while(index<langs.length){
    console.log(langs[index]);
    index++;
}
console.log("--------------------");

//For Döngüleri

for(let index2=0;index2<langs.length;index2++){
    console.log(langs[index2]);
    

}
console.log("--------------------");

langs.forEach(function(lang,index){
    console.log(lang,index);
});
const users=[
    {name:"Ataberk",age:20},
    {name:"Ahmet",age:25},
    {name:"Ayşe",age:15}

];

const names=users.map(function(user){
    return user.name;
});
console.log(names);

const ages=users.map(function(user){
    return user.age;

});

console.log(ages);




var a={
    name:"Ataberk",
    age:25
};
for( var p in a){
    console.log(p,a[p]);
}


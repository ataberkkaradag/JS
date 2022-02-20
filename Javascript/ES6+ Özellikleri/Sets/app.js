//Setler-Kümeler   --bir değeri bir defa taşır

const myset=new Set();
myset.add(100);
myset.add(100);
myset.add(3.16);
myset.add("Ataberk");
myset.add(true);
myset.add([1,2,3]);
myset.add({a:1,b:2,c:3});


const myset2=new Set([100,2,100,"Ataberk",{a:4,b:6,c:8},[6,7,8]]);


console.log(myset);
console.log(myset2);


//size
console.log(myset.size);
//delete
myset.delete("Ataberk");

//has

console.log(myset.has(100));


//For Each

myset.forEach(function(e){
    console.log(e);
})


//for of

for(let i of myset){
    console.log(i);
}




const array=Array.from(myset);
console.log(array);
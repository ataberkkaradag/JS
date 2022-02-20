let value;

const numbers=[12,34,21,5,87,43,32,56];
const numbers2=new Array(1,2,3,4,5,6,7);
const langs=["Python","Java","C++","C#"];
const a=["Merhaba",3,null,undefined,3.14,45];






value=numbers.length;
value=numbers[0];
value=numbers[numbers.length-1];

//Değeri değiştirme
numbers[2]=1000;

//indexof
value=numbers.indexOf(1000);
//sondan değer ekleme push
numbers.push(2000);
//başına değer ekleme
numbers.unshift(3000);
value=numbers;
//Sonudan değer atma
numbers.pop()
value=numbers;
//Başından değer atma
numbers.shift();
value=numbers;

// Belli bir indeksden belli bir indekse kadaar değer atma
numbers.splice(0,3);
value.numbers;
//Reverse
numbers.reverse();
value=numbers;
//sort
numbers.sort();
value=numbers;


value=numbers.sort(function(x,y){ //Küçükten büyüğe sıralama
    return x-y;
})
value=numbers.sort(function(x,y){//büyükten küçüğe sıralama
    return y-x;
})








console.log(value);
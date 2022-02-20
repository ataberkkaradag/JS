//Spread Operator

const langs=["Python","C++","Php"];

console.log(langs);
console.log(langs[0],langs[1],langs[2]);
console.log(...langs);

const langs2=["Javascript","c#",...langs];
console.log(langs2);

const numbers=[1,2,3,4,5,6,7,8,9];
const [a,b,...numbers2]=numbers;
console.log(a,b);
console.log(numbers2);


const plusenumbr=(a,b,c)=>console.log(a+b+c);
const nmbrs=[100,200,300];
plusenumbr(...nmbrs);

let value;

const now= new Date();// Şu anki zaman
console.log(now);
const date1=new Date("12-4-2000 09:05:00");
const date2=new Date("December 4 2000");
const date3=new Date("12/4/2000");

value=date1;
value=date1.getMonth();
value=date1.getDate();
value=date1.getDay();
value=date1.getHours();


date1.setMonth(7);
date1.setFullYear(1992);
value=date1



console.log(value);
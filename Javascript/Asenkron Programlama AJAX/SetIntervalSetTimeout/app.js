//  Set Timeout


setTimeout(() => {
    console.log("sea")
}, 2000);

//Set Interval

let i=0;
let value=setInterval(() => {
    i++;
    console.log(i);
}, 1000);

//Clear Interval
document.getElementById("btn").addEventListener("click",function(){
    clearInterval(value);
})

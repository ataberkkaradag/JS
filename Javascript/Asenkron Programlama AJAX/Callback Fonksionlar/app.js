// CAllback Fonksiyonlar

const langs=["Python","Java","C++"];

/*langs.forEach(function(lang){
    console.log(lang);

});*/

document.getElementById("btn").addEventListener("click",function(){
    console.log("Tıkla");

})
/*
function process1(){
    
    setTimeout(function(){
        console.log("Process1");
    },3000);
}
function process2(){
    setTimeout(function()  {
        console.log("Process2");
        
    },2000 );
    
}

process1();
process2();
console.log("sea");
*/
console.log("-------------------------")

function process1(callback){
    
    setTimeout(function(){
        console.log("Process1");
        callback();
    },3000);
}
function process2(){
    setTimeout(function()  {
        console.log("Process2");
        
    },2000 );
    
}

process1(process2);

function addLangs(lang,callback){
    setTimeout(() => {
        langs.push(lang)
        console.log("Eklendi");
        callback();
        
    }, 2000);
}
function getAllLangs(){
    setTimeout(() => {
        langs.forEach(function(lang){
            console.log(lang);
        })
        
    }, 1000);
}


addLangs("Javascript",getAllLangs);

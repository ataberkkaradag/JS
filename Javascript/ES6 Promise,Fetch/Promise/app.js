function getData(data){

    return new Promise(function(resolve,reject){

        setTimeout(function(){

            resolve("olumlu sonuç");
        },2000);





    });
}


console.log(getData("sea"));
getData("sea").then(function(response){
    console.log(response);
})









function getdata2(data){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            if(typeof data==="string"){
                resolve(data);

            }
            else{
                reject( new Error("Lütfen string bir değer giriniz"));
            }

        },5000)
    })
}




getdata2(2).then(response=>{
    console.log(response);
}).catch(err=>{
    console.error(err);
});







function addTwo(number){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(typeof number==="number"){
                resolve(number+2)

            }
            else{
                reject(new Error("Lütfen bir sayı girin"))

            }
        },6000)

    })
}


addTwo(10).then(response=>{
    console.log(response);
    return response+5;                    //Bir tane catch  birden fazla then kullanılır

}).then(response2=>console.log(response2)).catch(err=>console.error(err));
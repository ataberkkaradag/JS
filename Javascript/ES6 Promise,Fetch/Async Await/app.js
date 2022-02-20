async function test(data){//asyn mutlaka promise döndürür
    return data;


}
test("Merhaba").then(response=>console.log(response))
.catch(err=>console.log(err));






async function test2(data){      //await resolve olmasını bekler sonra çalışır
    let promise=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Değerrr")
        },5000);
    });

    let response=await promise;//async fonkiyonlarda   çalışır

    return response;


}
test2("Merhaba").then(response=>console.log(response));






async function testData(data){

    let promise=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(typeof data ==="string"){
                resolve(data);
            }
            else{
                reject(new Error("Lütfen string bir değer giriniz"))

            }
        },5000);
    });

    const response=await promise;

    return response;

}

testData("Ataberk").then(response=>console.log(response))
.catch(err=>console.error(err));


testData(2).then(response=>console.log(response))
.catch(err=>console.error(err));





async function getfetch(url){

    const response=await fetch(url);
    const data=await response.json();
   
    return data;

    
}

getfetch("http://api.exchangeratesapi.io/v1/latest?access_key=ee0c0b74b3d0381a87e6b708cbf29512")
.then(data=>console.log(data));
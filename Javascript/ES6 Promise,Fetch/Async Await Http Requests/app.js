class Request{
    
    async get(url){
        const response=await fetch(url);
        const data=await response.json();
        return data;
    }

    async post(url,data){

        const response=await fetch(url,{
            method:"POST",
            body:JSON.stringify(data),
            headers:{"Content-type":"application/json; charset=UTF-8"}
        });
        const responsedata=await response.json();
        return responsedata;

    }

    async put(url,data){
        const response=await fetch(url,{
            method:"PUT",
            body:JSON.stringify(data),
            headers:{"Content-type":"application/json; charset=UTF-8"}
        });
        const responsedata=await response.json();

        return responsedata;


    }

    async delete(url){
        const response=await fetch(url,{method:"DELETE"})
        return "Veri Silme İşlemi başarılı"
    }



}



const request=new Request();


request.get("https://jsonplaceholder.typicode.com/albums")
.then(data=>console.log(data))

request.post("https://jsonplaceholder.typicode.com/albums",{userId:10,title:"Ataberk"})
.then(data=>console.log(data))
.catch(err=>console.log(err));

request.put("https://jsonplaceholder.typicode.com/albums/11",{userId:11,title:"aAtaberk"})
.then(data=>console.log(data))
.catch(err=>console.log(err));


request.delete("https://jsonplaceholder.typicode.com/albums/1")
.then(message=>console.log(message))
.catch(err=>console.log(err));



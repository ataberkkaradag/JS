//Ajax ,Callback ,Http requests


class Requests{
    constructor(){
        this.xhr=new XMLHttpRequest();
    }
    // Get Request
    get(url ,callback){
        this.xhr.open("GET",url);//Bağlantı açma

        this.xhr.onload=function(){

            if(this.xhr.status===200){
                callback(null,this.xhr.responseText);//isteğimiz bitti
                
            }
            else{
                callback("Herhangi bir hata oluştu",null);
            }
        }.bind(this);


        this.xhr.send();

    }
    //Post Request
    post(url,data,callback){
        this.xhr.open("POST",url);
        this.xhr.setRequestHeader("Content-type","application/json");
        this.xhr.onload=function(){
            if(this.xhr.status===201){
                //Başarılı
                callback(null,this.xhr.responseText);
            }
            else{
                callback("Herhangi bir hata oluştu",null)
            }
        }.bind(this);
        this.xhr.send(JSON.stringify(data));

    }
    put(url,data,callback){
        
        this.xhr.open("PUT",url);
        this.xhr.setRequestHeader("Content-type","application/json");
        this.xhr.onload=() => {
            if(this.xhr.status===200){
                //Başarılı
                
                callback(null,this.xhr.responseText);
            }
            else{
                callback("Herhangi bir hata oluştu",null)
            }
        }
        this.xhr.send(JSON.stringify(data));

    }
    delete(url ,callback){
        this.xhr.open("DELETE",url);//Bağlantı açma

        this.xhr.onload=function(){

            if(this.xhr.status===200){
                callback(null,this.xhr.responseText);//isteğimiz bitti
                
            }
            else{
                callback("Herhangi bir hata oluştu",null);
            }
        }.bind(this);


        this.xhr.send();
   }
}

const request=new Requests();
/*request.get("https://jsonplaceholder.typicode.com/albums",function(err,response){
    if(err===null){
        //Başarılı
        console.log(response);
        
    }
    else{
        //HATA
        console.log(err);

    }
    
});*/



/*request.get("https://jsonplaceholder.typicode.com/albums/51",function(err,response){
    if(err===null){
        //Başarılı
        console.log(response);
        
    }
    else{
        //HATA
        console.log(err);

    }
    
});*/

/*request.post("https://jsonplaceholder.typicode.com/albums",{userId:7,title:"Sea"},function(err,response){
    if(err===null){
        console.log(response);
    }
    else{
        console.log(err);
    }
})*/

request.put("https://jsonplaceholder.typicode.com/albums/10",{userId:7,title:"Sea"},function(err,response){
    if(err===null){
        console.log(response);
    }
    else{
        console.log(err);
    }
});

request.delete("https://jsonplaceholder.typicode.com/albums/51",function(err,response){
    if(err===null){
        //Başarılı
        console.log(response);
        
    }
    else{
        //HATA
        console.log(err);

    }
    
});

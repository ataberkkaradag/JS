
document.getElementById("btn").addEventListener("click",function(){

    //XMLHttpRequest
    const xhr=new XMLHttpRequest();

   /* xhr.onreadystatechange=function(){
        //console.log(this.readyState);
        //console.log(this.status);

        if(this.status==200&&this.readyState==4){
            //response hazr
            console.log(this.responseText);
        }

    }*/
    
    /*xhr.onprogress=function(){
        
            console.log("İşleniyor",this.readyState);
        
    }*/

    xhr.onload=function(){
        if(this.status===200){
           document.getElementById("ajax").textContent=this.responseText;
        }
    }

    xhr.open("GET","example.txt",true);

    xhr.send();








})
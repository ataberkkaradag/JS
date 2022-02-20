document.getElementById("change").addEventListener("click",change);



function change(){

    const xhr=new XMLHttpRequest();

    xhr.open("GET","http://api.exchangeratesapi.io/v1/latest?access_key=ee0c0b74b3d0381a87e6b708cbf29512");


    xhr.onload=function(){
        if(this.status){
            const response=JSON.parse(this.responseText);
            
            const rate=response.rates.TRY;
            const amount=Number(document.getElementById("amount").value);
            document.getElementById("tl").value=amount*rate;
        }

    }


    xhr.send();
}
function getTextFile(){//Text Dosyası

    fetch("example.txt").then(response=> response.text())
    .then(data=>console.log(data))
    .catch(err=>console.log(err));


}

getTextFile();



function getJSONFile(){//JSON Dosyası

 fetch("example.json").then(function (response){

    return response.json()
}).then(data=>console.log(data)).catch(err=>console.log(err))

}

getJSONFile();



function getExternalApi(){
fetch("http://api.exchangeratesapi.io/v1/latest?access_key=ee0c0b74b3d0381a87e6b708cbf29512")
.then(response=> response.json())
.then(data=>{
    console.log(data.rates.TRY)
    console.log(data.rates)


     console.log(data)})
.catch(err=>console.log(err))





}

getExternalApi();
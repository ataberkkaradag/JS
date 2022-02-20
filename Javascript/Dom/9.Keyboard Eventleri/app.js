//Klavye eventleri

//keypress
/*document.addEventListener("keypress",run);
function run(e){
    console.log(e.which);
    console.log(e.key);
    //console.log("Naber");
}*/

//keydown tuşa bastığın anda tetiklenir


/*document.addEventListener("keydown",run2);

function run2(e){

    console.log(e.key);
}
*/


//keyup tuşu bıkartıktan sonra tetiklenir

/*document.addEventListener("keyup",run3);

function run3(e){

    console.log(e.key);
}*/



const header =document.querySelector(".card-header");
const todoinput=document.getElementById("todo");

todoinput.addEventListener("keyup",changeText);

function changeText(e){
 
header.textContent=e.target.value;
}
// Event Bubbling

/*document.querySelector(".container").addEventListener("click",function(){
console.log("Div Contaier")
});


document.querySelector(".card.row").addEventListener("click",function(){
    console.log("Card row")
    });

document.querySelectorAll(".card-body")[1].addEventListener("click",function(){
    console.log("Card Body")
    });

*/

    // Event Capturing


    const cardbody=document.querySelectorAll(".card-body")[1];
    cardbody.addEventListener("click",run);


    function run(e){

        if(e.target.className==="far fa-calendar-times"){
            console.log("Silindi");
        }
        
        
    }


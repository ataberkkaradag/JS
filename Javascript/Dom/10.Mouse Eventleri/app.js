
const cardbody=document.querySelectorAll(".card-body")[1];
const title=document.querySelector("#task-title");

//Click Eventi

/*title.addEventListener("click",run);


function run(e){

    console.log(e.type);

}*/


//DoubleClick

/*title.addEventListener("dblclick",run2);

function run2(e){
    console.log(e.type);
}*/

//Mouse Down

title.addEventListener("mousedown",run3);

function run3(e){
    console.log(e.type);
}

//Mouse Down

title.addEventListener("mouseup",run4);

function run4(e){
    console.log(e.type);
}

//Mouse Over                       parent elemente eklenirse  child elementlerede eklenir

title.addEventListener("mouseover",run5);

function run5(e){
    console.log(e.type);
}
//Mouse Out
title.addEventListener("mouseout",run6);

function run6(e){
    console.log(e.type);
}

//Mouse Enter ve Mouse Leave              sadece parent element için geçerli

cardbody.addEventListener("mouseenter",run7);
cardbody.addEventListener("mouseleave",run7);

function run7(e){
    console.log(e.type);
}

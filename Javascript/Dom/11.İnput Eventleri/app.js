const filter=document.getElementById("filter");


//Focus

filter.addEventListener("focus",run);
//Blur
filter.addEventListener("blur",run);


function run(e){
    console.log(e.type);
}


//Paste
filter.addEventListener("paste",run1);

function run1(e){
    console.log(e.type);
}

//Copy
filter.addEventListener("copy",run2);
//Cut
filter.addEventListener("cut",run2);

function run2(e){
    console.log(e.type);
}

//Select
filter.addEventListener("select",run3);

function run3(e){
    console.log(e.type);
}
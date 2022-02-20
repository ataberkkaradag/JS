//REPLACE

const cardbody=document.querySelectorAll(".card-body")[1];

const newtitle=document.createElement("h3");

newtitle.className="card-title";
newtitle.id="tasks-title";
newtitle.textContent="Yeni todolar";

//Eski element

const oldtitle=document.querySelector("#task-title");

cardbody.replaceChild(newtitle,oldtitle);





console.log(newtitle);
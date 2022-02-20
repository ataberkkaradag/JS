//Window Object
/*let value;

value=document;
value=document.all;

value=document.all.length;
value=document.all[6];
value=document.all[document.all.length-1];

const elements=document.all;*/

/*for(let i=0;i<elements.length;i++){
    console.log(elements[i]);
}*/

/*const collections=Array.from(document.all)
collections.forEach(function(element) {
    console.log(element);
    
});*/

/*value=document.all[8];
value=document.body;
value=document.location;
value=document.location.hostname;
value=document.location.port;
value=document.URL;

//Scriptler

value=document.scripts;
value=document.scripts[0];
//linkler
value=document.links;
value=document.links[0];
value=document.links[document.links.length-1];
value=document.links[document.links.length-1].getAttribute("class");
value=document.links[document.links.length-1].getAttribute("href");
value=document.links[document.links.length-1].className;
value=document.links[document.links.length-1].classList;

//Formlar

value=document.forms;
value=document.forms[0];
value=document.forms["form"];
value=document.forms[0].id;
value=document.forms[0].getAttribute("id");
value=document.forms[0].name;
value=document.forms[0].getAttribute("name");
value=document.forms[0].method;









console.log(value);*/


//Element Id'ye göre seçme
let element;

element=document.getElementById("todo-form");
element=document.getElementById("task-title");

//Element class'a göre seçme

element=document.getElementsByClassName("list-group-item");
element=document.getElementsByClassName("list-group-item")[0];

//Element tag'e göre seçme

element=document.getElementsByTagName("div");

//Query Selector -Css Selector- Tek bir element döner

element=document.querySelector(".list-group-item");
element=document.querySelector("#todo-form");
element=document.querySelector("li");

//Query Selector All-Tümm elemetler

element=document.querySelectorAll(".list-group-item");//Node list

element.forEach(function(elmnt){

    console.log(elmnt);
})










//console.log(element);


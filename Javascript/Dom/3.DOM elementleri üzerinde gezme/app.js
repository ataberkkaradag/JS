let value;

const todoList=document.querySelector(".list-group");
const todo=document.querySelector(".list-group-item:nth-child(2)");
const cardrow=document.querySelector(".card.row");
value=todoList;
value=todo;
value=cardrow;

//Child Nodes  -Text Dahil

value=todoList.childNodes;


//Children   -Sadece Element

value=todoList.children;
value=todoList.children[0];
value=todoList.children[2].textContent="Değişti";

value=cardrow.children;
value=cardrow.children[2].children[1].textContent="Burasıda değişti";



value=todoList.firstElementChild;
value=todoList.lastElementChild;

value=todoList.children.length;
value=todoList.childElementCount;


value=cardrow.parentElement;
value=cardrow.parentElement.parentElement;

//Element Kardeşleri

value=todo.previousElementSibling;
value=todo.nextElementSibling;
value=todo.nextElementSibling.nextElementSibling;




console.log(value);
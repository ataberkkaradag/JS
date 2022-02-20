/*//Local Storage


localStorage.setItem("Galatasaray",1905);
localStorage.setItem("Fenerbahçe",1907);


//Get Item


const value=localStorage.getItem("Galatasaray");

console.log(2+value);




// Clear Local Storage

localStorage.clear();

console.log(localStorage.getItem("sport"));


// Local Storage Array Yazma

const todos=["Todos 1","Todos 2","Todos 3"];
localStorage.setItem("todos",JSON.stringify(todos));
const value=JSON.parse(localStorage.getItem("todos"));

*/










const form=document.getElementById("todo-form");
const todoInput=document.getElementById("todo");

form.addEventListener("submit",addTodo);

function addTodo(e){
    const value=todoInput.value;
    let todos;

    if(localStorage.getItem("todos")===null){
        todos=[];
    }
    else{
        todos=JSON.parse(localStorage.getItem("todos"));
    }
    todos.push(value);
    localStorage.setItem("todos",JSON.stringify(todos))





    e.preventDefault();
}


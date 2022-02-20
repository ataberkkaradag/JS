//Yeni Element Oluşturma

//<a id="clear-todos" href="#" class="btn btn-dark">Tüm Taskları Temizleyin</a>


const newLink=document.createElement("a");
const cardbody=document.getElementsByClassName("card-body")[1];

newLink.id="clear-todos";
newLink.href="https://www.google.com.tr";
newLink.target="_blank";
newLink.className="btn btn-warning";


//Text Content

// newLink.textContent="Tüm Taskları Temizleyin"; kötü yontem

// Text Node
newLink.appendChild(document.createTextNode("Tüm Taskları temizleyin"));


cardbody.appendChild(newLink);


console.log(newLink);




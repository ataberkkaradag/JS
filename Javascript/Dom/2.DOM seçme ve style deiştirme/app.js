const element=document.querySelector("#clear-todos");


//Element Özellikleri
console.log(element.id);
console.log(element.className);
console.log(element.classList);
console.log(element.classList[1]);
console.log(element.textContent);
console.log(element.innerHTML);
console.log(element.href);
console.log(element.style);


// Style ve Element özelliklerini Değiştirme

element.className="btn btn-danger";
element.style.color="#000";
element.style.marginLeft="50px";
element.href="https://www.google.com.tr";
element.target="_blank";
element.innerHTML="<span style='color:green'>Silin!</span>";


const elements=document.querySelectorAll(".list-group-item");//Node list


elements.forEach(function(elm){
elm.style.background="#ccc";

});



let element2=document.querySelector("li:last-child");
element2=document.querySelector("li:nth-child(2)");
element2=document.querySelector("li:nth-child(3)");
element2=document.querySelectorAll("li:nth-child(even)");


element2.forEach(function(el){
    el.style.background="#eee";
})
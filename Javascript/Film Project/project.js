const form=document.getElementById("film-form");
const titleElement=document.querySelector("#title");
const directorElement=document.querySelector("#director");
const urlElement=document.querySelector("#url");
const cardbody=document.querySelectorAll(".card-body")[1];
const clearbutton=document.getElementById("clear-films");


//Tüm Eventleri yükleme

eventlisteners();

function eventlisteners(){
    form.addEventListener("submit",addFilm);
    document.addEventListener("DOMContentLoaded",function(){
        let films=Storage.getFilmsFromStorage();
        UI.loadAllFilms(films);
    });
    cardbody.addEventListener("click",deleteFilm);
    clearbutton.addEventListener("click",clearAllFilms);
}


function addFilm(e){
    const title=titleElement.value;
    const director=directorElement.value;
    const url=urlElement.value;

    if(title===""||director===""||url===""){
        //Hata
        UI.displayMessages("Tüm alanları doldurun","danger");
    }
    else{
        //Yeni film
        const newFilm=new Film(title,director,url);
        UI.addFilmToUI(newFilm);//Arayüze Film Ekleme
        Storage.addFilmToStorage(newFilm);//Storage a Film ekleme
        UI.displayMessages("Film Başarıyla Eklendi","success");

    }

    UI.cleatInputs(titleElement,directorElement,urlElement);



    e.preventDefault();
}
function deleteFilm(e){
    if(e.target.id==="delete-film"){
        UI.deleteFilmFromUI(e.target);
        Storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
    
    UI.displayMessages("Silme İşlemi Başarılı","info")
    
    }
 
    
}

function clearAllFilms(){
    if(confirm("Emin misiniz ?")){
        UI.clearAllFilmsFromUI();
    Storage.clearAllFilmsFromStorage();

    }
    
}
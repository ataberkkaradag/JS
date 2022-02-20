//HTML Elementlerini seçme
const githubForm=document.getElementById("github-form");
const nameInput=document.getElementById("githubname");
const clearlastusers=document.getElementById("clear-last-users");
const lastusers=document.getElementById("last-users");


eventListeners();

const github=new Github();
const ui=new UI();


function eventListeners(){
    githubForm.addEventListener("submit",getData);
    clearlastusers.addEventListener("click",clearAllSearched);
    document.addEventListener("DOMContentLoaded",getAllSearched);


}




function getData(e){
    let username=nameInput.value.trim();    //inputdan ismi alıyor trimle sağdaki ve soldaki boşlukları siliyoruz
     
    if(username===""){
        alert("Lütfen Geçerli bir kullanıcı adı girin")
    }
    else{
        github.getGithubData(username)
        .then(response=>{
            if(response.user.message==="Not Found"){
                //HATA
                ui.showerror("Kullanıcı bulunamadı")
            }
            else{

                ui.showUserInfo(response.user);
                ui.showRepoInfo(response.repo)
            }
        })
        .catch(err=>ui.showerror(err));
        

    }



    ui.cleatInput(); //Input Alanını temizleme
    e.preventDefault();

}


function clearAllSearched(){
    //Tüm Arananları Temizler
}
function getAllSearched(){
    //Arananları Storagedan al ui a ekle
}

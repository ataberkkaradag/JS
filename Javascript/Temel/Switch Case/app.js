const progress=2;


if(progress===1) console.log("işlem1");
else if(progress===2) console.log("işlem2");
else if(progress===3) console.log("işlem3");
else console.log("işlem Başarısız");


switch(progress){

case 1:
    console.log("işlem 1");
    break;
case 2:
    console.log("işlem 2");
    break;
case 3:
    console.log("işlem 3");
    break;
default:
    console.log("geçersiz işlem");

}


var counter1=0,counter2=0,counter3=0,i=0;


    
while(i<50){
    var a=Math.ceil(Math.random()*3);


    switch(a){

        case 1:
            counter1+=1;
            break;
        case 2:
            counter2+=1;
            break;
        case 3:
            counter3+=1;
            break;
        default:
            console.log("Geçersiz işlem");
            break;
        
    
    }
    i++;
}
    
 

console.log("Bir:"+counter1+" İki:"+counter2+" Üç:"+counter3);
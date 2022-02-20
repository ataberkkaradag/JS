const merhaba=function(){
    console.log("Merhaba");}



    //Arrow function
    const mrb=()=>{
        console.log("Merhaba");

    }

    merhaba();
    mrb();


    const merhabaname=(name)=> console.log("merhaba",name);

    merhabaname("Ata");

    const cube= x=> x*x*x;

    console.log(cube(4));
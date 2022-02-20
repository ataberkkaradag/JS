class Matematik{
pow(x){
    console.log(x*x);
}
static cube(x){
    console.log(x*x*x);
}
}

const math=new Matematik()

math.pow(2);
Matematik.cube(2);



//cube fonksionu statik olduğu için bir değişkenle çalışmaz
math.cube(2);     
//pow fonksionu statik olmadığı için obje üzerinden çalışmaz değişken tanımlamak gerekir
Matematik.pow(2);
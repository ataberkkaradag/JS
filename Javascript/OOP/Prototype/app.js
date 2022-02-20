/*const object=new Object();

object.name="Ataberk";
console.log(object);*/




function Employee(name,age){
    this.name=name;
    this.age=age;
    this.showInfos=function(){
        console.log("bilgiler Gösteriliyor...")
    }
}

const emp1=new Employee("Ataberk",20);
console.log(emp1);

console.log(emp1.toString());





function Employee2(name,age){
    this.name=name;
    this.age=age;

}
Employee2.prototype.showInfos2=function(){
    console.log("isim: "+this.name+"Yaş: " +this.age);
}

const emp2=new Employee2("Ataberk",20);
const emp3=new Employee2("Karadağ",25);

console.log(emp2);
console.log(emp3);

emp2.showInfos2();
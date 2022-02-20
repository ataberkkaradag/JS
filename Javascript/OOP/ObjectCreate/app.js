const obj={
    test1:function(){
        console.log("test 1");
    },
    test2:function(){
        console.log("test 2");
    }
}

console.log(obj);

const emp=Object.create(obj);
emp.name="Ataberk";
emp.age=20;

console.log(emp);




function Personn(){

}
Personn.prototype.test3=function(){
    console.log("Test3")
}
Personn.prototype.test4=function(){
    console.log("Test4")
}
const person=new Personn();

console.log(person);

function Employee(name,age){
    this.name=name;
    this.age=age;

}
Employee.prototype=Object.create(Personn.prototype);
Employee.prototype.myTest=function(){
    console.log("myTest");
}

const empl=new Employee("Ataberk",20);

console.log(empl);

empl.test3();
empl.test4();
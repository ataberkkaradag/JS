// Kalıtım -Inheritance


function Person(name,age){
    this.name=name;
    this.age=age;

}



Person.prototype.showInfos=function(){
    console.log("İsim: "+this.name+" Yaş: "+this.age);

}

const person=new Person("Ataberk",20);

console.log(person);

function Employee(name,age,salary){
    Person.call(this,name,age);

    this.salary=salary;
}

Employee.prototype=Object.create(Person.prototype);


Employee.prototype.showInfos=function(){                //Override
    console.log("İsim: "+this.name+" Yaş: "+this.age+" Maaş: "+this.salary);
}

const emp=new Employee("Ataberk",20,4000);

console.log(emp);

emp.showInfos();
console.log(emp.toString());
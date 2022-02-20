
function Person(name,age){
    this.name=name;
    this.age=age;


}
Person.prototype.showInfos=function(){console.log( this.name, this.age)};

function Employee(name,age,salary){
    Person.call(this,name,age);
    this.salary=salary;
}
Employee.prototype=Object.create(Person.prototype);

Employee.prototype.showInfos=function(){console.log( this.name, this.age,this.salary)};


const person=new Person("Ataberk",2);

console.log(person);
person.showInfos();

const emp=new Employee("Ataberk" ,2,200);
console.log(emp);
emp.showInfos();


class Employee2{

    constructor(name,age,salary){
        this.name=name;
        this.age=age;
        this.salary=salary;
    }
    showInfos() {
        console.log(this.name ,this.age,this.salary);
        
    }

}

const emp2=new Employee2("Ataberk",20,2000);
console.log(emp2);
emp2.showInfos();
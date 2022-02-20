class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;

    }
    showInfos(){
        console.log("İsim: "+this.name+" Yaş="+this.age);
    }
}



class Employee extends Person{//Kalıtım
    constructor(name,age,salary){
        super(name,age);
        this.salary=salary;
    }
    showInfos(){//overriding
        console.log("İsim: "+this.name+" Yaş: "+this.age," Maaş: "+this.salary);
    }
    toString(){//overriding
        console.log("Employee");
    }
    raiseSalary(amount){//Ekstra
        this.salary+=amount;
    }
}

const emp=new Employee("Ataberk",20,4000);


console.log(emp);
emp.toString();
emp.raiseSalary(100);

console.log(emp.salary);
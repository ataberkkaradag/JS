 const emp1={
     name:"Ataberk",
     age:25,
     
 }


 function Employee(name,age,salary){
     this.name=name;
     this.age=age;
     this.salary=salary;

     this.showInfos=function(){
         console.log(this.name,this.age,this.salary);
     }
 }

 const emp2=new Employee("Ataberk",20,3000);


 console.log(emp2);
emp2.showInfos();
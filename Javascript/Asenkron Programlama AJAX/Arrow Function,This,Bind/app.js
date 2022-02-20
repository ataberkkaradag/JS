const person={
    age:25,
   /* tellAge:function(){
        //this:person
        console.log(this.age);
    }.bind(this)*/
    //this:Window


    tellAge2:()=>{
        console.log(this);
        console.log(this.age)
    }




}




person.tellAge2();
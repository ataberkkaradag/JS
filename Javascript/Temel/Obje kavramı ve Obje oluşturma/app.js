let value;
const programmer={
    name:"Ataberk Karadağ",
    age:25,
    email:"ataberkkaradag34@gmail.com",
    langs:["Python","Javascript","C++"],
    adress:{
        city:"İstanbul",
        hood:"Yamanevler"

    },
    work:function(){
        console.log("Programcı çalışıyor...")
    }
};

value=programmer;
value=programmer.email;
value=programmer["email"];
value=programmer.langs;
value=programmer.adress.city;
programmer.work();

const programmers=[
    {name:"Ataberk",age:25},
    {name:"Ahmet",age:30}
]
value=programmers[0];
value=programmers[0].name;


console.log(value);
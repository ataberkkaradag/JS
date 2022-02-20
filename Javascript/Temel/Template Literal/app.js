const name="Ataberk Karadağ";
const department="Bilişim";
const salary=4000;

//const a="İsim: "+ name +"\n"+"Departman: "+ department+"\n"+"Maaş: "+salary;

//const a=`İsim: ${name}\nDepartman: ${department}\nMaaş: ${salary}\n`;

/*const html="<ul>"+
"<li>"+name+"</li>"+
"<li>"+department+"</li>"+
"<li>"+salary+"</li>"+
"</ul>";
document.body.innerHTML=html;*/

const html=`<ul><li>${name}</li><li>${department}</li><li>${salary}</li><li>${10/4}</li></ul>`;

document.body.innerHTML=html;


//console.log(a);
let value;

const firstName="Louis";
const lastName="Armstrong";
const langs="Java,Python,c++";

value=firstName+" "+lastName;
value="Ataberk Karadag";
value+="gs";
value=firstName.length;
value=firstName.concat(" ",lastName," ", "Ataberk");
value=lastName.toLowerCase();
value=firstName.toUpperCase();
value=firstName[0];
value=firstName[2];
value=firstName[firstName.length-1];


//Index Of
value=firstName.indexOf("L");
value=firstName.indexOf("o");
value=firstName.indexOf("l");
//Char at
value=firstName.charAt("2");
value=firstName.charAt(firstName.length-1);
//Split
value=langs.split(",");
//Replace
value=langs.replace("Java","CSS");
//Includes
value=langs.includes("Java");
value=langs.includes("c#");






console.log(value);  
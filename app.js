 
const age=prompt("¿que edad tienes?");



if (age >= 1 && age < 3){
    alert("toddler");
    
}
else if(age >=3 && age <5 ) {
    alert("Preschool");

}else if( age>=5 && age < 12) {
 alert("Gradeschooler");

}else if( age>=12 && age<18) {
    alert("Teen");

}else if(age>=18 && age<21){
     alert("YoungAdult");

}else if(age >=21 ){
    alert("Adult");

} else {
    alert("El mensaje ingresado no es valido");
}

document.getElementById("ages2").innerHTML="<h1>HOLA</h1>"+alert;

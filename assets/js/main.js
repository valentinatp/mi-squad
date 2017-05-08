function Misquad(nombre, edad, hobbies) {
    this.nombre = nombre;
    this.edad = edad + " años.";
    this.hobbies = hobbies;

}

var integrantes = [];

var pez = new Misquad([
    ["Maria Paz Rojas."],
    [26],
    ["Escuchar musica", "Comer", "Hablar ingles"]
]);
integrantes.push(pez);
var dani = new Misquad([
    ["Daniela Sanchez."],
    [24],
    ["Escuchar musica", "Cantar", "Ver series"]
]);
integrantes.push(dani);
var diana = new Misquad([
    ["Diana Monsalve."],
    [29],
    ["Hacer scratch", "Escuchar musica", "Negocios"]
]);
integrantes.push(diana);
var trini = new Misquad([
    ["Trinidad Fuentes."],
    [26],
    ["Video juegos", "Puglover", "Dormir"]
]);
integrantes.push(trini);
var vale = new Misquad([
    ["Valentina Lopez."],
    [25],
    ["Tarot", "Idiomas", "Peliculas mudas"]
]);
integrantes.push(vale);
var mari = new Misquad([
    ["Maribel Diaz."],
    [30],
    ["Salir a tomar cafe", "Comer muffins", "Escribir"]
]);
integrantes.push(mari);
var gilia = new Misquad([
    ["Gilia Gongora."],
    [28],
    ["Eschuchar musica", "Cantar", "Bailar"]
]);
integrantes.push(gilia);


/*function datos(integrantes){
	var imp = document.getElementById("miembro1");
	var contenedor = document.getElementsByClassName("miembros");
	contenedor[0].innerHTML += "<b>Nombre: </b>" + elemento.nombre[0] + "<br>" + "<b>Edad: </b>" + elemento.edad[0] + "<br>";*/


integrantes.forEach(function(elemento) {
    miembro1.innerHTML = "<div>" + "<b>Nombre: </b>" + elemento.nombre[0][0] + "<br>" + "<b>Edad: </b>" + elemento.nombre[1][0] + "<br>" + "<b>Hobbies: </b>" + elemento.nombre[2] + "<br>" + "</div>";
   
})

integrantes.forEach(function(elemento) {
    miembro2.innerHTML = "<div>" + "<b>Nombre: </b>" + elemento.nombre[0][0] + "<br>" + "<b>Edad: </b>" + elemento.nombre[1][0] + "<br>" + "<b>Hobbies: </b>" + elemento.nombre[2] + "<br>" + "</div>";
   
})

integrantes.forEach(function(elemento) {
    miembro3.innerHTML = "<div>" + "<b>Nombre: </b>" + elemento.nombre[0][0] + "<br>" + "<b>Edad: </b>" + elemento.nombre[1][0] + "<br>" + "<b>Hobbies: </b>" + elemento.nombre[2] + "<br>" + "</div>";
   
})

integrantes.forEach(function(elemento) {
    miembro4.innerHTML = "<div>" + "<b>Nombre: </b>" + elemento.nombre[0][0] + "<br>" + "<b>Edad: </b>" + elemento.nombre[1][0] + "<br>" + "<b>Hobbies: </b>" + elemento.nombre[2] + "<br>" + "</div>";
   
})

integrantes.forEach(function(elemento) {
    miembro5.innerHTML = "<div>" + "<b>Nombre: </b>" + elemento.nombre[0][0] + "<br>" + "<b>Edad: </b>" + elemento.nombre[1][0] + "<br>" + "<b>Hobbies: </b>" + elemento.nombre[2] + "<br>" + "</div>";
   
})

integrantes.forEach(function(elemento) {
    miembro6.innerHTML = "<div>" + "<b>Nombre: </b>" + elemento.nombre[0][0] + "<br>" + "<b>Edad: </b>" + elemento.nombre[1][0] + "<br>" + "<b>Hobbies: </b>" + elemento.nombre[2] + "<br>" + "</div>";
   
})

integrantes.forEach(function(elemento) {
    miembro7.innerHTML = "<div>" + "<b>Nombre: </b>" + elemento.nombre[0][0] + "<br>" + "<b>Edad: </b>" + elemento.nombre[1][0] + "<br>" + "<b>Hobbies: </b>" + elemento.nombre[2] + "<br>" + "</div>";
   
})

function cuadroTextoUno() {
    var valor = document.getElementById("cuadro1").value;
    var conte = document.getElementsByClassName("cuadro-texto1");
    conte[0].innerHTML += "<li>" + valor + "</li>";
}

function cuadroTextoDos() {
    var valor = document.getElementById("cuadro2").value;
    var conte = document.getElementsByClassName("cuadro-texto2");
    conte[0].innerHTML += "<li>" + valor + "</li>";
}

function cuadroTextoTres() {
    var valor = document.getElementById("cuadro3").value;
    var conte = document.getElementsByClassName("cuadro-texto3");
    conte[0].innerHTML += "<li>" + valor + "</li>";
}

function cuadroTextoCuatro() {
    var valor = document.getElementById("cuadro4").value;
    var conte = document.getElementsByClassName("cuadro-texto4");
    conte[0].innerHTML += "<li>" + valor + "</li>";
}

function cuadroTextoCinco() {
    var valor = document.getElementById("cuadro5").value;
    var conte = document.getElementsByClassName("cuadro-texto5");
    conte[0].innerHTML += "<li>" + valor + "</li>";
}

function cuadroTextoSeis() {
    var valor = document.getElementById("cuadro6").value;
    var conte = document.getElementsByClassName("cuadro-texto6");
    conte[0].innerHTML += "<li>" + valor + "</li>";
}

function cuadroTextoSiete() {
    var valor = document.getElementById("cuadro7").value;
    var conte = document.getElementsByClassName("cuadro-texto7");
    conte[0].innerHTML += "<li>" + valor + "</li>";
}


//ESTO NO FUNCIONA </3
function meGusta() {
    var suma = [];
    var contador = 0;
    for(var i = 0; i > suma.length; i++){
       contador + 1;
    }
return suma.push(contador);
    
}
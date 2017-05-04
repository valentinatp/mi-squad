function Misquad(nombre, apellido, edad, hobbies){
	this.nombre = nombre;
	this.apellido = apellido;
	this.edad = edad;
	this.hobbies = hobbies;
	this.datos = function(){
	var impr = document.getElementById("datitos");
	var conte = document.getElementsByClassName("datote");
	conte[0].innerHTML += "<b>Nombre: </b>" + this.nombre + " " + this.apellido + "<br>" + "<b>Edad: </b>" + this.edad + "<br>" + "<b>Hobbies: </b>" + "<li>"+this.hobbies + "<br>" + "<br>";
	}
}


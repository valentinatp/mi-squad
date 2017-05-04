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

	var pez = new Misquad("Maria Paz", "Rojas", 26, "escuchar musica, comer, hablar ingles");
	pez.datos()
	var dani = new Misquad("Daniela", "Sanchez", 24, "escuchar musica, cantar, ver series");
	dani.datos()
	var diana = new Misquad("Diana", "Monsalve", 29, "hacer scratch, escuchar musica, negocios");
	diana.datos()
	var trini = new Misquad("Trinidad", "Fuentes", 26, "video juegos, puglover, dormir");
	trini.datos()
	var vale = new Misquad("Valentina", "Lopez", 25, "tarot, idiomas, peliculas mudas");
	vale.datos()
	var mari = new Misquad("Maribel", "Diaz", 30, "salir a tomar cafe, comer muffins, escribir");
	mari.datos()
	var gilia = new Misquad("Gilia", "Gongora", 28, "eschuchar musica, cantar, bailar");
	gilia.datos()

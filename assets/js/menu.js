function mifunction(){
	var x = document.getElementById("topnav");
	if (x.className === "contenedor") {
		x.className += " responsive";
	} else {
		x.className = "contenedor";
	}
}
function matriz_cuadrada() {
	matriz = [
		[0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0]
	];

	matriz[0][0] = 1;
	matriz[1][1] = 1;
	matriz[2][2] = 1;
	matriz[3][3] = 1;
	matriz[4][4] = 1;
	matriz[5][5] = 1;
	matriz[6][6] = 1;
	matriz[7][7] = 1;

	document.getElementById("demo").innerHTML += matriz[0] + "<br>";
	document.getElementById("demo").innerHTML += matriz[1] + "<br>";
	document.getElementById("demo").innerHTML += matriz[2] + "<br>";
	document.getElementById("demo").innerHTML += matriz[3] + "<br>";
	document.getElementById("demo").innerHTML += matriz[4] + "<br>";
	document.getElementById("demo").innerHTML += matriz[5] + "<br>";
	document.getElementById("demo").innerHTML += matriz[6] + "<br>";
	document.getElementById("demo").innerHTML += matriz[7] + "<br>";


}
				


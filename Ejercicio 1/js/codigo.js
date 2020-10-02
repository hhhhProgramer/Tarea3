function OnGet(numeros) {
    var parcial = {
        arreglo: [0, 0, 0, 0, 0],
        total: 0
    };

    for (var i = 0; i < numeros.length; i++) {
        for (var e = 0; e < numeros[i].length; e++) {
            var arreglo = numeros[i][e];

            parcial.arreglo[e] += arreglo;

            if (arreglo == 0)
                parcial.total++;

            

        }
    }

    return parcial;
}

function InfoPartials() {
    var arreglos = [
        [0, 2, 5, 7, 6],
        [0, 0, 0, 3, 8],
        [2, 9, 6, 3, 4],
        [1, 5, 6, 1, 4], 
        [0, 9, 2, 5, 0]

    ];

    var ceros = OnGet(arreglos);

    document.getElementById("test").innerHTML += "Resultado <br>";

    document.getElementById("test").innerHTML += "Total de ceros: " + ceros.total + "<br>";

}
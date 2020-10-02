function GetSuma(matriz, matriz2) {
    var suma = [
        [0, 0],
        [0, 0]
    ];

    for (var i = 0; i < 2; i++) {
        for (var e = 0; e < 2; e++) {
            suma[i][e] = matriz[i][e] + matriz2[i][e];
        }
    }

    return suma;
}

function GetResta() {
    var resta = new Array[2][2];

    for (var i = 0; i < numeros.length; i++) {
        for (var e = 0; e < numeros[i].length; e++) {
            var arreglo = numeros[i][e];

            resta[i][e] = parcial.matriz[i][e] - parcial.matriz2[i][e];

        }
    }

    return resta;
}

function GetProducto() {
    var producto = new Array[2][2];

    for (var i = 0; i < numeros.length; i++) {
        for (var e = 0; e < numeros[i].length; e++) {
            var arreglo = numeros[i][e];

            producto[i][e] = parcial.matriz[i][e] * parcial.matriz2[i][e];

        }
    }
    return producto;
}

function GetDivision() {
    var div = new Array[2][2];

    for (var i = 0; i < numeros.length; i++) {
        for (var e = 0; e < numeros[i].length; e++) {
            var arreglo = numeros[i][e];

            div[i][e] = parcial.matriz[i][e] / parcial.matriz2[i][e];

        }
    }

    return div;
}

function InfoPartials() {

    var matriz = [
        [10, 5],
        [8, 2]
    ];

    var matriz2 = [
        [2, 3],
        [6, 8]
    ];

    var respuestas = GetSuma(matriz, matriz2);

    document.getElementById("test").innerHTML += "Resultado <br>";

    document.getElementById("test").innerHTML += "Suma: " + respuestas[0][0] + "<br>";
    document.getElementById("test").innerHTML += "Suma: " + respuestas[0][1] + "<br>";
    document.getElementById("test").innerHTML += "Suma: " + respuestas[1][0] + "<br>";
    document.getElementById("test").innerHTML += "Suma: " + respuestas[1][1] + "<br>";




}
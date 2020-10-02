function GetSuma(matriz,matriz2) {
    var suma = new Array[2][2];

    for (var i = 0; i < numeros.length; i++) {
        for (var e = 0; e < numeros[i].length; e++) {
            var arreglo = numeros[i][e];

            suma[i][e] = parcial.matriz[i][e] + parcial.matriz2[i][e];

        }
    }

    return suma;
}

function GetResta(matriz,matriz2){
    var resta = new Array[2][2];

    for (var i = 0; i < numeros.length; i++) {
        for (var e = 0; e < numeros[i].length; e++) {
            var arreglo = numeros[i][e];

            resta[i][e] = parcial.matriz[i][e] - parcial.matriz2[i][e];

        }
    }

    return resta;
}

function GetProducto(matriz,matriz2){
    var producto = new Array[2][2];

    for (var i = 0; i < numeros.length; i++) {
        for (var e = 0; e < numeros[i].length; e++) {
            var arreglo = numeros[i][e];

            producto[i][e] = parcial.matriz[i][e] * parcial.matriz2[i][e];

        }
    }
    return producto;
}

function GetDivision(matriz,matriz2){
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

    var respuestas = GetSuma(matriz,matriz2);

    document.getElementById("test").innerHTML += "Resultado de la suma <br>";

    document.getElementById("test").innerHTML += "Suma: " + respuestas[0] + "<br>";
    document.getElementById("test").innerHTML += "Suma: " + respuestas[1] + "<br>";
    document.getElementById("test").innerHTML += "Suma: " + respuestas[2] + "<br>";
    document.getElementById("test").innerHTML += "Suma: " + respuestas[3] + "<br>";

    var respuestasR = GetResta(matriz,matriz2);

    document.getElementById("test").innerHTML += "Resultado de la resta <br>";

    document.getElementById("test").innerHTML += "Resta: " + respuestasR[0] + "<br>";
    document.getElementById("test").innerHTML += "Resta: " + respuestasR[1] + "<br>";
    document.getElementById("test").innerHTML += "Resta: " + respuestasR[2] + "<br>";
    document.getElementById("test").innerHTML += "Resta: " + respuestasR[3] + "<br>";

    var respuestasP = GetProducto(matriz,matriz2);

    document.getElementById("test").innerHTML += "Resultado de la multiplicacion <br>";

    document.getElementById("test").innerHTML += "Producto: " + respuestasP[0] + "<br>";
    document.getElementById("test").innerHTML += "Producto: " + respuestasP[1] + "<br>";
    document.getElementById("test").innerHTML += "Producto: " + respuestasP[2] + "<br>";
    document.getElementById("test").innerHTML += "Producto: " + respuestasP[3] + "<br>";

    var respuestasD = GetDivision(matriz,matriz2);

    document.getElementById("test").innerHTML += "Resultado de la division <br>";

    document.getElementById("test").innerHTML += "Division: " + respuestasD[0] + "<br>";
    document.getElementById("test").innerHTML += "Division: " + respuestasD[1] + "<br>";
    document.getElementById("test").innerHTML += "Division: " + respuestasD[2] + "<br>";
    document.getElementById("test").innerHTML += "Division: " + respuestasD[3] + "<br>";

}
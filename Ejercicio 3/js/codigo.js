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

function GetResta(matriz, matriz2) {
    var resta = [
        [0, 0],
        [0, 0]
    ];

    for (var i = 0; i < 2; i++) {
        for (var e = 0; e < 2; e++) {
            resta[i][e] = matriz[i][e] - matriz2[i][e];
        }
    }

    return resta;
}

function GetProducto(matriz, matriz2) {
    var producto = [
        [0, 0],
        [0, 0]
    ];

    for (var i = 0; i < 2; i++) {
        for (var e = 0; e < 2; e++) {
            producto[i][e] = matriz[i][e] * matriz2[i][e];
        }
    }

    return producto;
}

function GetDivision(matriz, matriz2) {
    var div = [
        [0, 0],
        [0, 0]
    ];

    for (var i = 0; i < 2; i++) {
        for (var e = 0; e < 2; e++) {
            div[i][e] = matriz[i][e] / matriz2[i][e];
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
    var respuestas1 = GetResta(matriz, matriz2);
    var respuestas2 = GetProducto(matriz, matriz2);
    var respuestas3 = GetDivision(matriz, matriz2);
    
    document.getElementById("test").innerHTML += "Resultado <br>";

    document.getElementById("test").innerHTML += "Suma: " + respuestas[0][0] + "<br>";
    document.getElementById("test").innerHTML += "Suma: " + respuestas[0][1] + "<br>";
    document.getElementById("test").innerHTML += "Suma: " + respuestas[1][0] + "<br>";
    document.getElementById("test").innerHTML += "Suma: " + respuestas[1][1] + "<br>";

    document.getElementById("test").innerHTML += "Resta: " + respuestas1[0][0] + "<br>";
    document.getElementById("test").innerHTML += "Resta: " + respuestas1[0][1] + "<br>";
    document.getElementById("test").innerHTML += "Resta: " + respuestas1[1][0] + "<br>";
    document.getElementById("test").innerHTML += "Resta: " + respuestas1[1][1] + "<br>";

    document.getElementById("test").innerHTML += "Producto: " + respuestas2[0][0] + "<br>";
    document.getElementById("test").innerHTML += "Producto: " + respuestas2[0][1] + "<br>";
    document.getElementById("test").innerHTML += "Producto: " + respuestas2[1][0] + "<br>";
    document.getElementById("test").innerHTML += "Producto: " + respuestas2[1][1] + "<br>";

    document.getElementById("test").innerHTML += "Division: " + respuestas3[0][0] + "<br>";
    document.getElementById("test").innerHTML += "Division: " + respuestas3[0][1] + "<br>";
    document.getElementById("test").innerHTML += "Division: " + respuestas3[1][0] + "<br>";
    document.getElementById("test").innerHTML += "Division: " + respuestas3[1][1] + "<br>";



}

function GetSuma() {
    var suma = new Array[2][2];

    for (var i = 0; i < numeros.length; i++) {
        for (var e = 0; e < numeros[i].length; e++) {
            var arreglo = numeros[i][e];

            suma = parcial.arreglos[i][e] + parcial.arreglos[i][e];

        }
    }

    return suma;
}

function GetResta(arreglos){
    var resta = new Array[2][2];

    for (var i = 0; i < numeros.length; i++) {
        for (var e = 0; e < numeros[i].length; e++) {
            var arreglo = numeros[i][e];

            resta = parcial.arreglos[i][e] - parcial.arreglos[i][e];

        }
    }

    return resta;
}

function GetProducto(arreglos){
    var producto = new Array[2][2];

    for (var i = 0; i < numeros.length; i++) {
        for (var e = 0; e < numeros[i].length; e++) {
            var arreglo = numeros[i][e];

            producto = parcial.arreglos[i][e] * parcial.arreglos[i][e];

        }
    }
    return producto;
}

function GetDivision(arreglo){
    var div = new Array[2][2];

    for (var i = 0; i < numeros.length; i++) {
        for (var e = 0; e < numeros[i].length; e++) {
            var arreglo = numeros[i][e];

            div = parcial.arreglos[i][e] / parcial.arreglos[i][e];

        }
    }

    return div;
}

function InfoPartials() {
    
    var arreglos = [[10, 5],[8, 2],[2,3],[6,8]];

    var ceros = OnGet(arreglos);

    document.getElementById("test").innerHTML += "Resultado <br>";

    document.getElementById("test").innerHTML += "Suma: " + ceros.suma + "<br>";
    document.getElementById("test").innerHTML += "Resta: " + ceros.resta + "<br>";
    document.getElementById("test").innerHTML += "Producto: " + ceros.producto + "<br>";
    document.getElementById("test").innerHTML += "Divison: " + ceros.div + "<br>";

}
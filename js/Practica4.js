function mostrar() {
    var size = parseInt(document.getElementById("numero").value);
    var matriz = new Array(size);

    document.getElementById("test").innerHTML = "";


    for (let col = 0; col < size; col++) {
        matriz[col] = [];
        for (let row = 0; row < size; row++) {
            matriz[col][row] = 0;
            document.getElementById("test").innerHTML += matriz[col][row];
        }
        document.getElementById("test").innerHTML += "<br>";
    }
    document.getElementById("test").innerHTML += "<br>";
    document.getElementById("test").innerHTML += "<br>";

    for (let col = 0; col < size; col++) {
        matriz[col][col] = 1;
        matriz[col][(size - 1) - col] = 1;
    }

    for (let col = 0; col < size; col++) {
        for (let row = 0; row < size; row++) {
            document.getElementById("test").innerHTML += matriz[col][row];
        }
        document.getElementById("test").innerHTML += "<br>";
    }

}
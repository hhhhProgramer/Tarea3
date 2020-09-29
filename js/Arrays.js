function GetPromedio(calificaciones) {

    var promedio = new Array(calificaciones.length);
    const reducer = (accumulator, currentValue) => accumulator + currentValue;

    for (var i = 0; calificaciones.length; i++) {
        promedio[i] = calificaciones[i].reduce(reducer);
    }

    return promedio;
}




function InfoPartials() {
    var calificaciones = [
        [5.5, 8.6, 10],
        [8.0, 5.5, 10],
        [9.0, 4.1, 7.8],
        [10, 2.2, 8.1],
        [7.0, 9.2, 7.1],
        [9.0, 4.0, 6.0],
        [6.5, 5.0, 5.0],
        [4.0, 7.0, 4.0],
        [8.0, 8.0, 9.0],
        [10, 9.0, 9.2],
        [5.0, 10, 8.4],
        [9.0, 4.6, 7.5]
    ];


    /*  Necesitamos obtener la siguiente información:
        a) El promedio de cada alumno.
        b) El promedio más alto.
        c) El promedio más bajo.
        d) Cuantos parciales fueron reprobados (menores a 7.0).
        e) La distribución de las calificaciones finales (promedio), es decir:
    */
    var promedios = GetPromedio(calificaciones);

    document.getElementById("reps").innerHTML += "Resultado <br>";

    for (var i = 0; i < promedios.Promedios.length; i++) {
        document.getElementById("reps").innerHTML += " " + promedios.Promedios[i] + "<br>";
    }

    promedios.Promedios.sort(function(a, b) { return a - b; }); // [ 1, 5, 40, 200 ]

    document.getElementById("reps").innerHTML = "";
    document.getElementById("reps").innerHTML += "Reprobados: " + promedios.Reprobados + "<br>";
    document.getElementById("reps").innerHTML += "Promedio mas alto: " + promedios.Promedios[0] + "<br>";
    document.getElementById("reps").innerHTML += "Promedio mas bajo: " + promedios.Promedios[promedios.Promedios.length - 1] + "<br>";

    document.getElementById("reps").innerHTML += "0 – 49: " + promedios.GeneralProm[0] + "<br>";
    document.getElementById("reps").innerHTML += "5.0 – 5.9: " + promedios.GeneralProm[1] + "<br>";
    document.getElementById("reps").innerHTML += "6.0 – 6.9: " + promedios.GeneralProm[2] + "<br>";
    document.getElementById("reps").innerHTML += "7.0 – 7.9: " + promedios.GeneralProm[3] + "<br>";
    document.getElementById("reps").innerHTML += "8.0 – 8.9: " + promedios.GeneralProm[4] + "<br>";
    document.getElementById("reps").innerHTML += "9.0 – 10: " + promedios.GeneralProm[5] + "<br>";

}
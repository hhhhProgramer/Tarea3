function GetPromedio(calificaciones) {

    var promedio = new Array(calificaciones.length);
    const reducer = (accumulator, currentValue) => accumulator + currentValue;

    for (var i = 0; i < calificaciones.length; i++) {
        promedio[i] = calificaciones[i].reduce(reducer) / calificaciones[i].length;
    }

    return promedio;
}

function CountResult(calificaciones) {
    var parcial = {
        GeneralProm: [0, 0, 0, 0, 0, 0],
        Reprobados: 0
    };

    for (var i = 0; i < calificaciones.length; i++) {
        var calificacion = calificaciones[i];

        if (calificacion < 7.0)
            parcial.Reprobados++;

        if (calificacion < 5) {
            parcial.GeneralProm[0]++;
        } else if (calificacion >= 5 && calificacion < 6) {
            parcial.GeneralProm[1]++;
        } else if (calificacion >= 6 && calificacion < 7) {
            parcial.GeneralProm[2]++;
        } else if (calificacion >= 7 && calificacion < 8) {
            parcial.GeneralProm[3]++;
        } else if (calificacion >= 8 && calificacion < 9) {
            parcial.GeneralProm[4]++;
        } else if (calificacion >= 9 && calificacion <= 10) {
            parcial.GeneralProm[5]++;
        }
    }

    return parcial;
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
    document.getElementById("reps").innerHTML = "";


    document.getElementById("reps").innerHTML += "Resultado <br>";
    for (var i = 0; i < promedios.length; i++) {
        document.getElementById("reps").innerHTML += " " + promedios[i].toFixed(2) + "<br>";
    }
    promedios.sort(function(a, b) { return a < b; }); // [ 1, 5, 40, 200 ]
    document.getElementById("reps").innerHTML += "Promedio mas alto: " + promedios[0] + "<br>";
    document.getElementById("reps").innerHTML += "Promedio mas bajo: " + promedios[promedios.length - 1] + "<br>";

    var TablaResultados = CountResult(promedios);

    document.getElementById("reps").innerHTML += "Reprobados: " + TablaResultados.Reprobados + "<br>";
    document.getElementById("reps").innerHTML += "0 – 49: " + TablaResultados.GeneralProm[0] + "<br>";
    document.getElementById("reps").innerHTML += "5.0 – 5.9: " + TablaResultados.GeneralProm[1] + "<br>";
    document.getElementById("reps").innerHTML += "6.0 – 6.9: " + TablaResultados.GeneralProm[2] + "<br>";
    document.getElementById("reps").innerHTML += "7.0 – 7.9: " + TablaResultados.GeneralProm[3] + "<br>";
    document.getElementById("reps").innerHTML += "8.0 – 8.9: " + TablaResultados.GeneralProm[4] + "<br>";
    document.getElementById("reps").innerHTML += "9.0 – 10: " + TablaResultados.GeneralProm[5] + "<br>";

}
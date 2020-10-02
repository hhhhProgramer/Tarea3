function GetInfoVentas(ventas) {
    var ProductosVendidos = {
        Mejor: ventas[0][0],
        Peor: ventas[0][0],
        Total: 0,
        Semanas: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    };
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    for (var i = 0; i < ventas.length; i++) {
        ProductosVendidos.Semanas[i] = ventas[i].reduce(reducer);

        for (var e = 0; e < ventas[i].length; e++) {
            var venta = ventas[i][e];
            ProductosVendidos.Total += venta;

            if (venta > ProductosVendidos.Mejor)
                ProductosVendidos.Mejor = venta;

            if (venta <= ProductosVendidos.Peor)
                ProductosVendidos.Peor = venta;
        }
    }

    return ProductosVendidos;
}


function GetVentas() {
    var TablaVentas = [
        [5, 16, 10, 12, 24],
        [40, 55, 10, 11, 18],
        [15, 41, 78, 14, 51],
        [35, 22, 81, 15, 12],
        [50, 12, 71, 10, 20],
        [70, 40, 60, 28, 22],
        [50, 50, 50, 36, 25],
        [40, 70, 40, 11, 20],
        [20, 20, 30, 12, 18],
        [10, 40, 32, 13, 16],
        [50, 3, 24, 15, 82],
        [40, 46, 15, 46, 22]
    ];

    var ventas = GetInfoVentas(TablaVentas);

    document.getElementById("test").innerHTML = " ";
    document.getElementById("test").innerHTML += "Mejor: " + ventas.Mejor + "<br>";
    document.getElementById("test").innerHTML += "Peor: " + ventas.Peor + "<br>";
    document.getElementById("test").innerHTML += "Total: " + ventas.Total + "<br>";

    var i = 0;
    ventas.Semanas.forEach(semana => {
        document.getElementById("test").innerHTML += "Semana " + ++i + ": " + semana + "<br>";
    })





}
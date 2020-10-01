function GetSumTable(numbres) {

    var sumas = {
        rows: [0, 0, 0],
        column: [0, 0, 0]
    };
    const reducer = (accumulator, currentValue) => accumulator + currentValue;

    for (var i = 0; i < numbres.length; i++) {
        sumas.rows[i] = numbres[i].reduce(reducer);
        for (var row = 0; row < numbres[i].length; row++) {
            sumas.column[row] += numbres[i][row];
        }
    }

    return sumas;
}


function checkmagic(n) {
    return n == parseInt(document.getElementById("r1").textContent);
}

function IsMagic() {
    numbres = [
        [4, 9, 2],
        [3, 5, 7],
        [8, 1, 6]
    ];

    var input = document.getElementsByName("number");

    console.log(input.length);
    var colum = 0;

    for (let row = 0; row < input.length; row++) {
        if ((row % 3) == 0 && row != 0)
            colum += 1;

        numbres[colum][row - (colum * 3)] = parseInt(input[row].value);
    }



    var SumTable = GetSumTable(numbres);

    document.getElementById("r1").innerHTML = SumTable.rows[0];
    document.getElementById("r2").innerHTML = SumTable.rows[1];
    document.getElementById("r3").innerHTML = SumTable.rows[2];

    document.getElementById("r4").innerHTML = SumTable.column[0];
    document.getElementById("r5").innerHTML = SumTable.column[1];
    document.getElementById("r6").innerHTML = SumTable.column[2];

    var result = new Array().concat(SumTable.column).concat(SumTable.rows);

    document.getElementById("test").innerHTML = result.every(checkmagic) ?
        "Es una tabla magica!" :
        "Parece ser que no es una tabla magica :(";


}
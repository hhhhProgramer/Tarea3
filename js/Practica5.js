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

    document.getElementById("p1").innerHTML = SumTable.rows[0] / 3;
    document.getElementById("p2").innerHTML = SumTable.rows[1] / 3;
    document.getElementById("p3").innerHTML = SumTable.rows[2] / 3;




    document.getElementById("r4").innerHTML = SumTable.column[0];
    document.getElementById("r5").innerHTML = SumTable.column[1];
    document.getElementById("r6").innerHTML = SumTable.column[2];

    document.getElementById("p4").innerHTML = SumTable.column[0] / 3;
    document.getElementById("p5").innerHTML = SumTable.column[1] / 3;
    document.getElementById("p6").innerHTML = SumTable.column[2] / 3;

    var result = new Array().concat(SumTable.column).concat(SumTable.rows);

}

function numeroAleatorio(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function Nrand() {
    var input = document.getElementsByName("number");

    for (let row = 0; row < input.length; row++) {
        input[row].value = numeroAleatorio(1, 100);
    }
}
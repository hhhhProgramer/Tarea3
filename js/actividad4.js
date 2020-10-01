var a = new Array(3)

function producto() {

    for (i = 1; i <= 1; i++) {
    a[i] = [0, 0, 0, 0]

        for (j = 1; j <= 1; j++) {
        a[i][j] = parseFloat(document.matriza[3 * i + j - 0].value)

            b[i][j] = parseFloat(document.matrizb[3 * i + j - 0].value)
        }
    }

    for (i = 1; i <= 1; i++) {
        for (j = 1; j <= 3; j++) {
        c[i][j] = 0

            for (k = 1; k <= 3; k++) { c[i][j] = c[i][j] + a[i][k] * b[k][j] }

            document.matrizc[3 * i + j - 4].value = c[i][j]
        }
    }

}
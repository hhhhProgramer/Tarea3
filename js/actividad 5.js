function matriz() {

    for (j = 0; j < 10; j++) {
        sum = 0;
        for (i = 0; i < 10; i++) {
            a[i][j] = (i * 10) + i + j;
            sum += a[i][j];
        }
        a[10][j] = sum;
    }

    for (i = 0; i < 5; i++) {
        for (j = 0; j < 10; j++) {
            cout << a[i][j] << " ";
        }
        cout << endl;
    }
}
#include <iostream>

using namespace std;
void main()
{
	float datos[5][10], suma = 0, prom = 0;
	int i, j;
	//ingresar datos a la matriz
	for (i = 0; 1 < 5; i++) 
	{
		for (j = 0; j < 10; j++)
		{
			cout << "ingresar datos a la matriz" << i + 1 << "," << j + 1 << ":\t";
			cin >> datos[i][j];
		}
	}
	cout << "la suma y el promedio de los datos de la matriz - fila es: " << endl;
	for (i = 0; i < 5; i++) 
	{
		suma = 0;
		for (j = 0; j < 10; j++) 
		{
			suma = suma + datos[i][j];
		}
		prom = suma / j;
		cout << "la suma de los datos " << i + 1 << " es: " << suma << endl;
		cout << "el promedio es: " << prom << endl;
	}
	cout << endl << endl;
	cout << "la suma y el promedio de los datos de la matriz - columna es: " << endl;
	for (j = 0; j < 10; j++) 
	{
		suma = 0;
		for (i = 0; i < 5; i++) 
		{
			suma = suma + datos[i][j];
		}
		prom = suma / i;
		cout << "la suma de los datos B" << j + 1 << " es: " << suma << endl;
		cout << "el promedio es: " << prom << endl;
	}
	system("pause"); 

}
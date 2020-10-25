using System;
using Pilas.Entities;
using Repositories;

namespace View
{
    class Program
    {
        static void Main(string[] args)
        {
            ProductosRepository Productos = new ProductosRepository();
            while(true){
                
                Console.WriteLine("Elija una opcion:");
                Console.WriteLine("1) Mostrar productos");
                Console.WriteLine("2) Registrar un nuevo producto");
                Console.WriteLine("3) Eliminar producto");
                Console.WriteLine("4) Vender producto");
                Console.WriteLine("5) Agregar al stock de producto");

                try
                {
                    int option = Int32.Parse(Console.ReadLine());
                    switch(option){
                        case 1:
                            Productos.ShowList();
                            Console.WriteLine("\n");
                        break;

                        case 2:
                            Console.Write("Escriba el nombre del nuevo producto:");
                            Productos.AddProduct(Console.ReadLine().ToString());
                        break;

                        case 3:
                            Console.Write("Escriba el nombre del produto que desea eliminar: ");
                            Productos.DeleteProduct(Console.ReadLine().ToString());
                        break;

                        case 4:
                            Console.Write("Escriba el nombre del produto: ");
                            Productos.Remove(Console.ReadLine());
                        break;

                        case 5:
                            Console.Write("Escriba el nombre del produto: ");
                            Productos.Add(Console.ReadLine().ToString());
                        break;

                        default:
                            Console.WriteLine("No existe esa opcion");
                        break;
                    }
                }
                catch (System.Exception)
                {
                    Console.WriteLine("error intentelo de nuevo");
                }
                Console.Write("\n Press any key");
                Console.Read();
                Console.Clear();
            }
            //p.Delete(1);
            //Console.WriteLine("Hello World!");
        }
    }
}

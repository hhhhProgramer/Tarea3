using System;
using Entities;
using Pilas.Entities;
using Repositories.Interface;

namespace Repositories
{
    public class ProductosRepository : IProductoRepository
    {
        Lista<Producto> _list = new Lista<Producto>();
        public ProductosRepository()
        {
            
            _list.push_back(new Producto(){Nombre = "Producto1"});
            _list.push_back(new Producto(){Nombre = "Producto2"});
            _list.push_back(new Producto(){Nombre = "Producto3"});
        }

        public void Add(string Nombre)
        {
            for (Nodo<Producto> it = _list.Head; it != null; it = it.Siguiente)
            {
                Producto prod = it.Elemento;
                if(prod.Nombre == Nombre)
                    prod.Cantidad++;
            }
        }

        public void Remove(string Nombre)
        {
            for (Nodo<Producto> it = _list.Head; it != null; it = it.Siguiente)
            {
                Producto prod = it.Elemento;
                if(prod.Nombre == Nombre && prod.Cantidad > 0){
                    prod.Cantidad--;
                    prod.Retirados++;
                }
            }
        }

        public void ShowList()
        {
           for (Nodo<Producto> it = _list.Head; it != null; it = it.Siguiente)
            {
                Producto prod = it.Elemento;
                Console.WriteLine("Nombre:{0}",prod.Nombre);
                Console.WriteLine("Cantidad:{0}",prod.Cantidad);
                Console.WriteLine("Retirados:{0}",prod.Retirados);
                Console.WriteLine("Precio:{0}",prod.Precio);
                Console.WriteLine("\n");
            }
        }


        public void AddProduct(string Nombre)
        {
            for (Nodo<Producto> it = _list.Head; it != null; it = it.Siguiente)
            {
                if(it.Elemento.Nombre == Nombre) {
                    Console.WriteLine("Producto Registrado");
                    return;
                }
            }
            _list.push_back(new Producto(){Nombre = Nombre});
        }

        public void DeleteProduct(string Nombre)
        {
            for (Nodo<Producto> it = _list.Head; it != null; it = it.Siguiente)
            {
                Producto prod = it.Elemento;

                if(prod.Nombre == Nombre) {
                    _list.Delete(prod);
                    return;
                }
            }
        }

    }
}
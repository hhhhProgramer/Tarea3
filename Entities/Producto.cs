using System;

namespace Entities
{
    public class Producto
    {
        public string Nombre { get; set; }
        public int Cantidad { get; set; } = new Random().Next(2500);
        public int Precio { get; set; } = new Random().Next(2500);
        public int Retirados { get; set; }

    }
}
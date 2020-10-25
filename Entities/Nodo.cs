using System;

namespace Pilas.Entities
{
    public class Nodo<T>
    {
        public T Elemento { get; set; }
        public Nodo<T> Siguiente { get; set; }
        public Nodo<T> Anterior { get; set; }
    }
}

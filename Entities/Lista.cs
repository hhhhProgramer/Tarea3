using System;
using System.Collections.Generic;

namespace Pilas.Entities
{
    public class Lista<T>
    {
        int elementos {get; set;} 
        
        public Nodo<T> Tail {get; set;} // ultimo Nodo
        public Nodo<T> Head {get; set;} // primer Nodo

        public Lista() => elementos = 0;
        public T GetHead() => this.Tail.Elemento;
        public bool Empty() => (elementos == 0);
        public int Length() => elementos;
        public void Mostar() => MostrarSiguiente(Head);
        public void ShowReverse() => MostrarAnterior(Tail);


        public void push_back(T elemento) //agregar un Nodo al final de la lista
        {
            Nodo<T> NewElement = new Nodo<T>(); // crea un nodo nuevo
            NewElement.Elemento = elemento; // asigna el elemento pasado por parametro a la lista
            
            if(this.Empty())
                this.Head = NewElement;
            else{
                Tail.Siguiente = NewElement;
                NewElement.Anterior = Tail;
            }
                
            
            this.Tail = NewElement; //asignamos el nodo que acabamos de crear como el ultimo nodo
            elementos++; //aumentamos el contador de elementos
        }

        public void push_front(T elemento){ //agregar un Nodo al inicio de la lista
            Nodo<T> NewElement = new Nodo<T>(); // crea un nodo nuevo
            NewElement.Elemento = elemento; // asigna el elemento pasado por parametro a la lista

            if(elementos > 0){
                NewElement.Siguiente = Head;
                Head.Anterior = NewElement;
            }else{
                Tail = NewElement;
            }
                
            this.Head = NewElement;
            elementos++;
        }

        public void pop_back() { // eliminar el ultimo Nodo
            if(elementos == 0) return; // verifica que la lista tenga elementos que eliminar
            
            if(elementos == 1)
            {
                Head = null;
                Tail = null;
            }else{
                Tail = Tail.Anterior;
                Tail.Siguiente = null;
            }
            
            elementos--;
        }

        public void pop_front(){ // eliminar el primer Nodo
            if(elementos == 0) return; // verifica que la lista tenga elementos que eliminar

            if(elementos == 1)
            {
                Head = null;
                Tail = null;
            }else{
                Head = Head.Siguiente;
                Head.Anterior = null;
            }
            elementos--;
        }


        private void MostrarSiguiente(Nodo<T> aux){
            if(aux == null)
                return;
            else{
                Console.WriteLine(aux.Elemento);
                MostrarSiguiente(aux.Siguiente);
            }
        }
        private void MostrarAnterior(Nodo<T> head)
        {
           for(Nodo<T> nodo = Tail; nodo != null; nodo = nodo.Anterior){
                    Console.WriteLine(nodo.Elemento);
            }
        }
        public void Delete(T element) //elemina un nodo de la lista
        {
            for(Nodo<T> nodo = Head; nodo != null; nodo = nodo.Siguiente){
                if(EqualityComparer<T>.Default.Equals(element, nodo.Elemento))
                {
                    if(elementos == 1){
                        Head = null;
                        Tail = null;
                    }else{
                        Nodo<T> Siguiente = nodo.Siguiente;
                        Nodo<T> Anterior = nodo.Anterior;

                        if(Siguiente != null) Siguiente.Anterior = nodo.Anterior;
                        if(Anterior != null) Anterior.Siguiente = nodo.Siguiente;

                        if(EqualityComparer<T>.Default.Equals(element, Head.Elemento))
                            pop_front();

                        if(EqualityComparer<T>.Default.Equals(element, Tail.Elemento))
                            pop_back();
                            

                    }
                    elementos--;
                }
            }
        }



    }
}

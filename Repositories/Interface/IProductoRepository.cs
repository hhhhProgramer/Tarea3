namespace Repositories.Interface
{
    public interface IProductoRepository
    {
         void Add(string Nombre);
         void Remove(string Nombre);
         void ShowList();
    }
}
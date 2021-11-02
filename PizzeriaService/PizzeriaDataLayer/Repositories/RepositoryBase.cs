namespace PizzeriaDataLayer.Repositories
{
    public abstract class RepositoryBase
    {
        protected readonly string _connectionString;
        public RepositoryBase()
        {

        }

        public RepositoryBase(string connectionString)
        {
            _connectionString = connectionString;
        }
    }
}

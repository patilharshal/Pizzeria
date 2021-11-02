using PizzeriaDataLayer.Helpers;
using PizzeriaDataLayer.Interfaces;
using PizzeriaDataLayer.Models;
using System.Collections.Generic;

namespace PizzeriaDataLayer.Repositories
{
    public class MenuRepository : RepositoryBase, IMenuRepository
    {
        public IEnumerable<MenuItem> GetAllMenuItems()
        {
            return DataHelper.GetMenuItems();
        }
    }
}

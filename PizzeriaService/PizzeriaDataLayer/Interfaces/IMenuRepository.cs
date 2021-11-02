using PizzeriaDataLayer.Models;
using System.Collections.Generic;

namespace PizzeriaDataLayer.Interfaces
{
    public interface IMenuRepository
    {
        IEnumerable<MenuItem> GetAllMenuItems();
    }
}

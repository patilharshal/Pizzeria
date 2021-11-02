using PizzeriaDataLayer.Models;
using System;
using System.Collections.Generic;
using System.IO;
using System.Text.Json;

namespace PizzeriaDataLayer.Helpers
{
    public static class DataHelper
    {
        public static IEnumerable<MenuItem> GetMenuItems()
        {
            string filePath = Environment.CurrentDirectory + @"/AppData/MenuItem.json";
            var jsonMenuItems = File.ReadAllText(filePath);
            var menuItems = JsonSerializer.Deserialize<IEnumerable<MenuItem>>(jsonMenuItems);
            return menuItems;
        }
    }
}

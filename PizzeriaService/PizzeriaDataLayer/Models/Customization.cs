using System.Collections.Generic;

namespace PizzeriaDataLayer.Models
{
    public class Customization
    {
        public string CrustSize { get; set; }

        public string Sauce { get; set; }

        public bool ExtraCheese { get; set; }

        public IEnumerable<string> Toppings { get; set; }
    }
}

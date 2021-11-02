namespace PizzeriaDataLayer.Models
{
    public class Order
    {
        public int OrderId { get; set; }

        public MenuItem MenuItem { get; set; }

        public int Quantity { get; set; }

        public Customization Customization { get; set; }

        public double Price { get; set; }
    }
}

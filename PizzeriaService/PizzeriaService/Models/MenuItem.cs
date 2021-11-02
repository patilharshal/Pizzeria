namespace PizzeriaService.Models
{
    public class MenuItem
    {
        public int Id { get; set; }

        public string ItemName { get; set; }

        public string Description { get; set; }

        public string ImageUrl { get; set; }

        public double Price { get; set; }

        public string[] Ingrediants { get; set; }

        public bool IsPizzaItem { get; set; }
    }
}

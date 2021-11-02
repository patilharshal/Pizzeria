using System;
using Microsoft.AspNetCore.Mvc;
using PizzeriaService.Models;

namespace PizzeriaService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrderController : ControllerBase
    {
        [HttpPost]
        public int Post([FromBody]Order order)
        {
            var random = new Random();
            return random.Next(1, 1000);
        } 
    }
}
using System.Collections.Generic;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using PizzeriaDataLayer.Interfaces;
using PizzeriaService.Models;
using Microsoft.Extensions.Configuration.Json;
using System.Text.Json;

namespace PizzeriaService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MenuController : ControllerBase
    {
        private readonly IMenuRepository _menuRepository;
        private readonly IMapper _mapper;

        public MenuController(IMenuRepository menuRepository, IMapper mapper)
        {
            _menuRepository = menuRepository;
            _mapper = mapper;
        }

        [HttpGet]
        public IEnumerable<MenuItem> Get()
        {
            var menuItems = _menuRepository.GetAllMenuItems();
            return _mapper.Map<IEnumerable<MenuItem>>(menuItems);
        }
    }
}
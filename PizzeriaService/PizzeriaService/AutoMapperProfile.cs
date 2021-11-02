using AutoMapper;
using PizzeriaService.Models;

namespace PizzeriaService
{
    public class AutoMapperProfile : Profile
    {
        public AutoMapperProfile()
        {
            CreateMap<PizzeriaDataLayer.Models.MenuItem, MenuItem>().ReverseMap();
        }
    }
}

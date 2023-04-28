using Abp.AutoMapper;
using AutoMapper;
using GpManager.Instituitions;

namespace GpManager.Companies.Dto
{
    [AutoMapFrom(typeof(Company))]
    public class CompanyMapProfile : Profile
    {
        public CompanyMapProfile()
        {
            CreateMap<Company, CompanyDto>();
            CreateMap<Company, CreateCompanyDto>();

            CreateMap<CreateCompanyDto, Company>();
            CreateMap<CompanyDto, Company>();
        }
    }
}
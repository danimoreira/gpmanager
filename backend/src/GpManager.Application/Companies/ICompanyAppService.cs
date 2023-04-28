using Abp.Application.Services;
using GpManager.Companies.Dto;

namespace GpManager.Companies
{
    public interface ICompanyAppService: ICrudAppService<CompanyDto, int, PagedCompanyResultRequestDto, CreateCompanyDto, CompanyDto>
    {
        
    }
}
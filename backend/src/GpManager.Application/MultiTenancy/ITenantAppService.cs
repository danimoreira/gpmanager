using Abp.Application.Services;
using GpManager.MultiTenancy.Dto;

namespace GpManager.MultiTenancy
{
    public interface ITenantAppService : IAsyncCrudAppService<TenantDto, int, PagedTenantResultRequestDto, CreateTenantDto, TenantDto>
    {
    }
}


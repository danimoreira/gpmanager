using System.Threading.Tasks;
using Abp.Application.Services;
using GpManager.Authorization.Accounts.Dto;

namespace GpManager.Authorization.Accounts
{
    public interface IAccountAppService : IApplicationService
    {
        Task<IsTenantAvailableOutput> IsTenantAvailable(IsTenantAvailableInput input);

        Task<RegisterOutput> Register(RegisterInput input);
    }
}

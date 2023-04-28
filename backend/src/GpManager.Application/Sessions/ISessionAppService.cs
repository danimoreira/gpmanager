using System.Threading.Tasks;
using Abp.Application.Services;
using GpManager.Sessions.Dto;

namespace GpManager.Sessions
{
    public interface ISessionAppService : IApplicationService
    {
        Task<GetCurrentLoginInformationsOutput> GetCurrentLoginInformations();
    }
}

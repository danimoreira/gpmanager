using System.Threading.Tasks;
using GpManager.Configuration.Dto;

namespace GpManager.Configuration
{
    public interface IConfigurationAppService
    {
        Task ChangeUiTheme(ChangeUiThemeInput input);
    }
}

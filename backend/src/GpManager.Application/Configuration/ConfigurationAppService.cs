using System.Threading.Tasks;
using Abp.Authorization;
using Abp.Runtime.Session;
using GpManager.Configuration.Dto;

namespace GpManager.Configuration
{
    [AbpAuthorize]
    public class ConfigurationAppService : GpManagerAppServiceBase, IConfigurationAppService
    {
        public async Task ChangeUiTheme(ChangeUiThemeInput input)
        {
            await SettingManager.ChangeSettingForUserAsync(AbpSession.ToUserIdentifier(), AppSettingNames.UiTheme, input.Theme);
        }
    }
}

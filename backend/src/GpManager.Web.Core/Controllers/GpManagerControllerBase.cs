using Abp.AspNetCore.Mvc.Controllers;
using Abp.IdentityFramework;
using Microsoft.AspNetCore.Identity;

namespace GpManager.Controllers
{
    public abstract class GpManagerControllerBase: AbpController
    {
        protected GpManagerControllerBase()
        {
            LocalizationSourceName = GpManagerConsts.LocalizationSourceName;
        }

        protected void CheckErrors(IdentityResult identityResult)
        {
            identityResult.CheckErrors(LocalizationManager);
        }
    }
}

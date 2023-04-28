using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Abp.Modules;
using Abp.Reflection.Extensions;
using GpManager.Configuration;

namespace GpManager.Web.Host.Startup
{
    [DependsOn(
       typeof(GpManagerWebCoreModule))]
    public class GpManagerWebHostModule: AbpModule
    {
        private readonly IWebHostEnvironment _env;
        private readonly IConfigurationRoot _appConfiguration;

        public GpManagerWebHostModule(IWebHostEnvironment env)
        {
            _env = env;
            _appConfiguration = env.GetAppConfiguration();
        }

        public override void Initialize()
        {
            IocManager.RegisterAssemblyByConvention(typeof(GpManagerWebHostModule).GetAssembly());
        }
    }
}

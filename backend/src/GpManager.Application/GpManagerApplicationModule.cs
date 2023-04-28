using Abp.AutoMapper;
using Abp.Modules;
using Abp.Reflection.Extensions;
using GpManager.Authorization;

namespace GpManager
{
    [DependsOn(
        typeof(GpManagerCoreModule), 
        typeof(AbpAutoMapperModule))]
    public class GpManagerApplicationModule : AbpModule
    {
        public override void PreInitialize()
        {
            Configuration.Authorization.Providers.Add<GpManagerAuthorizationProvider>();
        }

        public override void Initialize()
        {
            var thisAssembly = typeof(GpManagerApplicationModule).GetAssembly();

            IocManager.RegisterAssemblyByConvention(thisAssembly);

            Configuration.Modules.AbpAutoMapper().Configurators.Add(
                // Scan the assembly for classes which inherit from AutoMapper.Profile
                cfg => cfg.AddMaps(thisAssembly)
            );
        }
    }
}

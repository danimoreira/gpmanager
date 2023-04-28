using Abp.AspNetCore;
using Abp.AspNetCore.TestBase;
using Abp.Modules;
using Abp.Reflection.Extensions;
using GpManager.EntityFrameworkCore;
using GpManager.Web.Startup;
using Microsoft.AspNetCore.Mvc.ApplicationParts;

namespace GpManager.Web.Tests
{
    [DependsOn(
        typeof(GpManagerWebMvcModule),
        typeof(AbpAspNetCoreTestBaseModule)
    )]
    public class GpManagerWebTestModule : AbpModule
    {
        public GpManagerWebTestModule(GpManagerEntityFrameworkModule abpProjectNameEntityFrameworkModule)
        {
            abpProjectNameEntityFrameworkModule.SkipDbContextRegistration = true;
        } 
        
        public override void PreInitialize()
        {
            Configuration.UnitOfWork.IsTransactional = false; //EF Core InMemory DB does not support transactions.
        }

        public override void Initialize()
        {
            IocManager.RegisterAssemblyByConvention(typeof(GpManagerWebTestModule).GetAssembly());
        }
        
        public override void PostInitialize()
        {
            IocManager.Resolve<ApplicationPartManager>()
                .AddApplicationPartsIfNotAddedBefore(typeof(GpManagerWebMvcModule).Assembly);
        }
    }
}
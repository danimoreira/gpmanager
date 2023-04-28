using System;
using System.Globalization;
using System.Linq;
using System.Threading.Tasks;
using Abp.Application.Services;
using Abp.Application.Services.Dto;
using Abp.Authorization;
using Abp.Collections.Extensions;
using Abp.Domain.Repositories;
using Abp.Extensions;
using GpManager.Authorization;
using GpManager.Measures.Dto;

namespace GpManager.Products
{
    [AbpAuthorize(PermissionNames.Pages_Register)]
    public class MeasureAppService : CrudAppService<Measure, MeasureDto, int, PagedMeasureResultRequestDto, CreateMeasureDto, MeasureDto>, IMeasureAppService
    {
        public MeasureAppService(IRepository<Measure, int> repository) : base(repository) {}


        public override MeasureDto Create(CreateMeasureDto input)
        {
            var data = ObjectMapper.Map<Measure>(input);
            data.IsActive = true;
            
            var id = Repository.InsertAndGetId(data);

            data.Id = id;

            var result = ObjectMapper.Map<MeasureDto>(data);

            return result;
        }

        public override void Delete(EntityDto<int> input)
        {
            var data = Repository.Get(input.Id);
            if (data == null)
                throw new System.Exception("Dados não encontrados para exclusão!");

            Repository.Delete(data);
        }

        public override bool Equals(object obj)
        {
            return base.Equals(obj);
        }

        public override MeasureDto Update(MeasureDto input)
        {
            var data = ObjectMapper.Map<Measure>(input);

            var result = Repository.Update(data);

            return ObjectMapper.Map<MeasureDto>(result);
        }

        protected override IQueryable<Measure> ApplyPaging(IQueryable<Measure> query, PagedMeasureResultRequestDto input)
        {
            return base.ApplyPaging(query, input);
        }

        protected override IQueryable<Measure> ApplySorting(IQueryable<Measure> query, PagedMeasureResultRequestDto input)
        {
            return base.ApplySorting(query, input);
        }

        protected override void CheckCreatePermission()
        {
            base.CheckCreatePermission();
        }

        protected override void CheckDeletePermission()
        {
            base.CheckDeletePermission();
        }

        protected override void CheckGetAllPermission()
        {
            base.CheckGetAllPermission();
        }

        protected override void CheckGetPermission()
        {
            base.CheckGetPermission();
        }

        protected override void CheckPermission(string permissionName)
        {
            base.CheckPermission(permissionName);
        }

        protected override void CheckUpdatePermission()
        {
            base.CheckUpdatePermission();
        }

        protected override IQueryable<Measure> CreateFilteredQuery(PagedMeasureResultRequestDto input)
        {
            return Repository.GetAll()
                .WhereIf(!input.Keyword.IsNullOrWhiteSpace(), x => x.Description.Contains(input.Keyword, StringComparison.InvariantCultureIgnoreCase))
                .WhereIf(input.IsActive.HasValue, x => x.IsActive == input.IsActive)
                .AsQueryable();
        }

        protected override Measure GetEntityById(int id)
        {
            return base.GetEntityById(id);
        }

        protected override bool IsEnabled(string featureName)
        {
            return base.IsEnabled(featureName);
        }

        protected override Task<bool> IsEnabledAsync(string featureName)
        {
            return base.IsEnabledAsync(featureName);
        }

        protected override bool IsGranted(string permissionName)
        {
            return base.IsGranted(permissionName);
        }

        protected override Task<bool> IsGrantedAsync(string permissionName)
        {
            return base.IsGrantedAsync(permissionName);
        }

        protected override string L(string name)
        {
            return base.L(name);
        }

        protected override string L(string name, params object[] args)
        {
            return base.L(name, args);
        }

        protected override string L(string name, CultureInfo culture)
        {
            return base.L(name, culture);
        }

        protected override string L(string name, CultureInfo culture, params object[] args)
        {
            return base.L(name, culture, args);
        }

        protected override Measure MapToEntity(CreateMeasureDto createInput)
        {
            return base.MapToEntity(createInput);
        }

        protected override void MapToEntity(MeasureDto updateInput, Measure entity)
        {
            base.MapToEntity(updateInput, entity);
        }

        protected override MeasureDto MapToEntityDto(Measure entity)
        {
            return base.MapToEntityDto(entity);
        }
    }
}
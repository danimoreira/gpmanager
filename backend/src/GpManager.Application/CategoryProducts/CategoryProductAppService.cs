using System;
using System.Globalization;
using System.Linq;
using System.Threading.Tasks;
using Abp.Application.Services;
using Abp.Application.Services.Dto;
using Abp.Authorization;
using Abp.Collections.Extensions;
using Abp.Domain.Entities;
using Abp.Domain.Repositories;
using Abp.Extensions;
using GpManager.Authorization;
using GpManager.CategoryProducts.Dto;
using Microsoft.EntityFrameworkCore;

namespace GpManager.Products
{
    [AbpAuthorize(PermissionNames.Pages_Register)]
    public class CategoryProductAppService : CrudAppService<CategoryProduct, CategoryProductDto, int, PagedCategoryProductResultRequestDto, CreateCategoryProductDto, CategoryProductDto>
    {
        public CategoryProductAppService(IRepository<CategoryProduct, int> repository) : base(repository)
        {
        }       

        public override CategoryProductDto Create(CreateCategoryProductDto input)
        {
            var data = ObjectMapper.Map<CategoryProduct>(input);
            data.IsActive = true;
            
            var id = Repository.InsertAndGetId(data);

            data.Id = id;

            var result = ObjectMapper.Map<CategoryProductDto>(data);

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

        public override CategoryProductDto Get(EntityDto<int> input)
        {
            return base.Get(input);
        }

        public override PagedResultDto<CategoryProductDto> GetAll(PagedCategoryProductResultRequestDto input)
        {
            return base.GetAll(input);
        }

        public override int GetHashCode()
        {
            return base.GetHashCode();
        }

        public override string ToString()
        {
            return base.ToString();
        }

        public override CategoryProductDto Update(CategoryProductDto input)
        {
            var data = ObjectMapper.Map<CategoryProduct>(input);

            var result = Repository.Update(data);

            return ObjectMapper.Map<CategoryProductDto>(result);
        }

        protected override IQueryable<CategoryProduct> ApplyPaging(IQueryable<CategoryProduct> query, PagedCategoryProductResultRequestDto input)
        {
            return base.ApplyPaging(query, input);
        }

        protected override IQueryable<CategoryProduct> ApplySorting(IQueryable<CategoryProduct> query, PagedCategoryProductResultRequestDto input)
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

        protected override IQueryable<CategoryProduct> CreateFilteredQuery(PagedCategoryProductResultRequestDto input)
        {
            return Repository.GetAll()
                .WhereIf(!input.Keyword.IsNullOrWhiteSpace(), x => x.Description.Contains(input.Keyword, StringComparison.InvariantCultureIgnoreCase))
                .WhereIf(input.IsActive.HasValue, x => x.IsActive == input.IsActive)
                .AsQueryable();
        }

        protected override CategoryProduct GetEntityById(int id)
        {
            var obj = Repository.GetAll().FirstOrDefault(x => x.Id == id);

            if (obj == null)
                throw new EntityNotFoundException(typeof(CategoryProduct), id);

            return obj;
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

        protected override CategoryProduct MapToEntity(CreateCategoryProductDto createInput)
        {
            return base.MapToEntity(createInput);
        }

        protected override void MapToEntity(CategoryProductDto updateInput, CategoryProduct entity)
        {
            base.MapToEntity(updateInput, entity);
        }

        protected override CategoryProductDto MapToEntityDto(CategoryProduct entity)
        {
            return base.MapToEntityDto(entity);
        }
    }
}
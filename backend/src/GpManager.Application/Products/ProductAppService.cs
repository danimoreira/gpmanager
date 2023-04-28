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
using GpManager.Products.Dto;
using Microsoft.EntityFrameworkCore;

namespace GpManager.Products
{
    [AbpAuthorize(PermissionNames.Pages_Register)]
    public class ProductAppService : CrudAppService<Product, ProductDto, int, PagedProductResultRequestDto, CreateProductDto, ProductDto>
    {
        public ProductAppService(IRepository<Product, int> repository) : base(repository)
        {
        }

        protected override string GetPermissionName { get => base.GetPermissionName; set => base.GetPermissionName = value; }
        protected override string GetAllPermissionName { get => base.GetAllPermissionName; set => base.GetAllPermissionName = value; }
        protected override string CreatePermissionName { get => base.CreatePermissionName; set => base.CreatePermissionName = value; }
        protected override string UpdatePermissionName { get => base.UpdatePermissionName; set => base.UpdatePermissionName = value; }
        protected override string DeletePermissionName { get => base.DeletePermissionName; set => base.DeletePermissionName = value; }

        public override ProductDto Create(CreateProductDto input)
        {
            var data = ObjectMapper.Map<Product>(input);
            data.IsActive = true;
            
            var id = Repository.InsertAndGetId(data);

            data.Id = id;

            var result = ObjectMapper.Map<ProductDto>(data);

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

        public override ProductDto Get(EntityDto<int> input)
        {
            return base.Get(input);
        }

        public override PagedResultDto<ProductDto> GetAll(PagedProductResultRequestDto input)
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

        public override ProductDto Update(ProductDto input)
        {
            var Product = ObjectMapper.Map<Product>(input);

            Repository.Update(Product);

            var result = GetEntityById(Product.Id);  

            return ObjectMapper.Map<ProductDto>(result);
        }

        protected override IQueryable<Product> ApplyPaging(IQueryable<Product> query, PagedProductResultRequestDto input)
        {
            return base.ApplyPaging(query, input);
        }

        protected override IQueryable<Product> ApplySorting(IQueryable<Product> query, PagedProductResultRequestDto input)
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

        protected override IQueryable<Product> CreateFilteredQuery(PagedProductResultRequestDto input)
        {
            return Repository.GetAll()
                .Include(x => x.CategoryProduct)
                .Include(x => x.ClosedMeasure)
                .Include(x => x.MeasureMain)
                .WhereIf(!input.Keyword.IsNullOrWhiteSpace(), x => x.Description.Contains(input.Keyword, StringComparison.InvariantCultureIgnoreCase))
                .WhereIf(input.IsActive.HasValue, x => x.IsActive == input.IsActive)
                .AsQueryable();
        }

        protected override Product GetEntityById(int id)
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

        protected override Product MapToEntity(CreateProductDto createInput)
        {
            return base.MapToEntity(createInput);
        }

        protected override void MapToEntity(ProductDto updateInput, Product entity)
        {
            base.MapToEntity(updateInput, entity);
        }

        protected override ProductDto MapToEntityDto(Product entity)
        {
            return base.MapToEntityDto(entity);
        }
    }
}
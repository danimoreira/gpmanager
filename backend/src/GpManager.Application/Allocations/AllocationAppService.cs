using System;
using System.Collections.Generic;
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
using GpManager.Instituitions;
using GpManager.Instituitions.Repositories;

namespace GpManager.Allocations.Dto
{
    [AbpAuthorize(PermissionNames.Pages_Register)]
    public class AllocationAppService: CrudAppService<Allocation, AllocationDto, int, PagedAllocationResultRequestDto, CreateAllocationDto, AllocationDto>
    {
        private readonly IAllocationRepository _repository;
        public AllocationAppService(IRepository<Allocation> repository, IAllocationRepository AllocationRepository) : base(repository)
        {
            _repository = AllocationRepository;
        }

        protected override string GetPermissionName { get => base.GetPermissionName; set => base.GetPermissionName = value; }
        protected override string GetAllPermissionName { get => base.GetAllPermissionName; set => base.GetAllPermissionName = value; }
        protected override string CreatePermissionName { get => base.CreatePermissionName; set => base.CreatePermissionName = value; }
        protected override string UpdatePermissionName { get => base.UpdatePermissionName; set => base.UpdatePermissionName = value; }
        protected override string DeletePermissionName { get => base.DeletePermissionName; set => base.DeletePermissionName = value; }

        public override AllocationDto Create(CreateAllocationDto input)
        {
            var data = ObjectMapper.Map<Allocation>(input);
            data.IsActive = true;
            
            var id = Repository.InsertAndGetId(data);

            data.Id = id;

            var result = ObjectMapper.Map<AllocationDto>(data);

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

        public override AllocationDto Get(EntityDto<int> input)
        {
            var result = base.Get(input);

            return result;
        }

        public override PagedResultDto<AllocationDto> GetAll(PagedAllocationResultRequestDto input)
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

        public override AllocationDto Update(AllocationDto input)
        {            
            CheckUpdatePermission();

            var Allocation = ObjectMapper.Map<Allocation>(input);

            _repository.Update(Allocation);

            var result = GetEntityById(Allocation.Id);  

            return ObjectMapper.Map<AllocationDto>(result);
        }

        protected override IQueryable<Allocation> ApplyPaging(IQueryable<Allocation> query, PagedAllocationResultRequestDto input)
        {
            return base.ApplyPaging(query, input);
        }

        protected override IQueryable<Allocation> ApplySorting(IQueryable<Allocation> query, PagedAllocationResultRequestDto input)
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

        protected override IQueryable<Allocation> CreateFilteredQuery(PagedAllocationResultRequestDto input)
        {
            return Repository.GetAllIncluding(x => x.Prefecture)
                .WhereIf(!input.Keyword.IsNullOrWhiteSpace(), x => x.Name.Contains(input.Keyword, StringComparison.InvariantCultureIgnoreCase) || x.Prefecture.Name.Contains(input.Keyword, StringComparison.InvariantCultureIgnoreCase))
                .WhereIf(input.IsActive.HasValue, x => x.IsActive == input.IsActive)
                .AsQueryable();
        }

        protected override Allocation GetEntityById(int id)
        {
            var result = Repository.GetAllIncluding(x => x.Prefecture).FirstOrDefault(x => x.Id == id);
            return result;
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

        protected override Allocation MapToEntity(CreateAllocationDto createInput)
        {
            return base.MapToEntity(createInput);
        }

        protected override void MapToEntity(AllocationDto updateInput, Allocation entity)
        {
            entity = ObjectMapper.Map<Allocation>(updateInput);
        }

        protected override AllocationDto MapToEntityDto(Allocation entity)
        {
            return ObjectMapper.Map<AllocationDto>(entity);
        }
    }
}
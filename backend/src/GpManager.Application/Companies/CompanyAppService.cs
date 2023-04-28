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
using Abp.Domain.Uow;
using Abp.Extensions;
using AutoMapper;
using GpManager.Authorization;
using GpManager.Companies.Dto;
using GpManager.Instituitions;
using GpManager.Instituitions.Repositories;

namespace GpManager.Companies
{
    [AbpAuthorize(PermissionNames.Pages_Register)]
    public class CompanyAppService : CrudAppService<Company, CompanyDto, int, PagedCompanyResultRequestDto, CreateCompanyDto, CompanyDto>
    {
        private readonly ICompanyRepository _repository;
        public CompanyAppService(IRepository<Company> repository, ICompanyRepository companyRepository) : base(repository)
        {
            _repository = companyRepository;
        }

        protected override string GetPermissionName { get => base.GetPermissionName; set => base.GetPermissionName = value; }
        protected override string GetAllPermissionName { get => base.GetAllPermissionName; set => base.GetAllPermissionName = value; }
        protected override string CreatePermissionName { get => base.CreatePermissionName; set => base.CreatePermissionName = value; }
        protected override string UpdatePermissionName { get => base.UpdatePermissionName; set => base.UpdatePermissionName = value; }
        protected override string DeletePermissionName { get => base.DeletePermissionName; set => base.DeletePermissionName = value; }

        public override CompanyDto Create(CreateCompanyDto input)
        {
            var data = ObjectMapper.Map<Company>(input);
            data.IsActive = true;
            
            var id = Repository.InsertAndGetId(data);

            data.Id = id;

            var result = ObjectMapper.Map<CompanyDto>(data);

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

        public override CompanyDto Get(EntityDto<int> input)
        {
            var result = base.Get(input);

            return result;
        }

        public override PagedResultDto<CompanyDto> GetAll(PagedCompanyResultRequestDto input)
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

        public override CompanyDto Update(CompanyDto input)
        {            
            CheckUpdatePermission();

            var company = ObjectMapper.Map<Company>(input);

            _repository.Update(company);

            var result = GetEntityById(company.Id);  

            return ObjectMapper.Map<CompanyDto>(result);
        }

        protected override IQueryable<Company> ApplyPaging(IQueryable<Company> query, PagedCompanyResultRequestDto input)
        {
            return base.ApplyPaging(query, input);
        }

        protected override IQueryable<Company> ApplySorting(IQueryable<Company> query, PagedCompanyResultRequestDto input)
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

        protected override IQueryable<Company> CreateFilteredQuery(PagedCompanyResultRequestDto input)
        {
            return Repository.GetAll()
                .WhereIf(!input.Keyword.IsNullOrWhiteSpace(), x => x.Name.Contains(input.Keyword, StringComparison.InvariantCultureIgnoreCase) || x.Email.Contains(input.Keyword, StringComparison.InvariantCultureIgnoreCase))
                .WhereIf(input.IsActive.HasValue, x => x.IsActive == input.IsActive)
                .AsQueryable();
        }

        protected override Company GetEntityById(int id)
        {
            var result = base.GetEntityById(id);
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

        protected override Company MapToEntity(CreateCompanyDto createInput)
        {
            return base.MapToEntity(createInput);
        }

        protected override void MapToEntity(CompanyDto updateInput, Company entity)
        {
            entity = ObjectMapper.Map<Company>(updateInput);
        }

        protected override CompanyDto MapToEntityDto(Company entity)
        {
            return ObjectMapper.Map<CompanyDto>(entity);
        }
    }
}
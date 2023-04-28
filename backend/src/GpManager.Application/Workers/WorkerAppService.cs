using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Threading.Tasks;
using Abp.Application.Services;
using Abp.Application.Services.Dto;
using Abp.Authorization;
using Abp.Domain.Repositories;
using GpManager.Authorization;
using GpManager.Employees;
using GpManager.Workers.Dto;

namespace GpManager.Workers
{
    [AbpAuthorize(PermissionNames.Pages_Register)]
    public class WorkerAppService: CrudAppService<Worker, WorkerDto, int, PagedWorkerResultRequestDto, CreateWorkerDto, WorkerDto>
    {
        public WorkerAppService(IRepository<Worker, int> repository) : base(repository)
        {
        }

        protected override string GetPermissionName { get => base.GetPermissionName; set => base.GetPermissionName = value; }
        protected override string GetAllPermissionName { get => base.GetAllPermissionName; set => base.GetAllPermissionName = value; }
        protected override string CreatePermissionName { get => base.CreatePermissionName; set => base.CreatePermissionName = value; }
        protected override string UpdatePermissionName { get => base.UpdatePermissionName; set => base.UpdatePermissionName = value; }
        protected override string DeletePermissionName { get => base.DeletePermissionName; set => base.DeletePermissionName = value; }

        public override WorkerDto Create(CreateWorkerDto input)
        {
            var data = ObjectMapper.Map<Worker>(input);
            data.IsActive = true;
            
            var id = Repository.InsertAndGetId(data);

            data.Id = id;

            var result = ObjectMapper.Map<WorkerDto>(data);

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

        public override WorkerDto Get(EntityDto<int> input)
        {
            return base.Get(input);
        }

        public override PagedResultDto<WorkerDto> GetAll(PagedWorkerResultRequestDto input)
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

        public override WorkerDto Update(WorkerDto input)
        {
            var data = ObjectMapper.Map<Worker>(input);

            var result = Repository.Update(data);

            return ObjectMapper.Map<WorkerDto>(result);
        }

        protected override IQueryable<Worker> ApplyPaging(IQueryable<Worker> query, PagedWorkerResultRequestDto input)
        {
            return base.ApplyPaging(query, input);
        }

        protected override IQueryable<Worker> ApplySorting(IQueryable<Worker> query, PagedWorkerResultRequestDto input)
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

        protected override IQueryable<Worker> CreateFilteredQuery(PagedWorkerResultRequestDto input)
        {
            return base.CreateFilteredQuery(input);
        }

        protected override Worker GetEntityById(int id)
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

        protected override Worker MapToEntity(CreateWorkerDto createInput)
        {
            return base.MapToEntity(createInput);
        }

        protected override void MapToEntity(WorkerDto updateInput, Worker entity)
        {
            base.MapToEntity(updateInput, entity);
        }

        protected override WorkerDto MapToEntityDto(Worker entity)
        {
            return base.MapToEntityDto(entity);
        }
    }
}
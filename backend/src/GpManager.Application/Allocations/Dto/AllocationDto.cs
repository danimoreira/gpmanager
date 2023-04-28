using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Abp.Application.Services.Dto;
using Abp.AutoMapper;
using GpManager.Instituitions;
using GpManager.ValueObjects;

namespace GpManager.Allocations.Dto
{
    [AutoMap(typeof(Allocation))]
    public class AllocationDto: EntityDto<int>
    {
        public int IdInternal { get; set; }
        public string Name { get; set; }
        public Address Address { get; set; }
        public string Cnpj { get; set; }
        public bool IsActive { get; set; }
        public string InitialTimeOperation { get; set; }
        public string FinalTimeOperation { get; set; }
        public int TypeAllocationId { get; set; }
        public int PrefectureId { get; set; }

        public DateTime CreationTime { get; set; }
        public long? CreatorUserId { get; set; }
        public long? LastModifierUserId { get; set; }
        public DateTime? LastModificationTime { get; set; }
    }
}
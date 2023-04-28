using System;
using Abp.Application.Services.Dto;

namespace GpManager.TypeAllocations.Dto
{
    public class TypeAllocationDto : EntityDto<int>
    {
        public string Description { get; set; }
        public bool IsActive { get; set; }

        public DateTime CreationTime { get; set; }
        public long? CreatorUserId { get; set; }
        public long? LastModifierUserId { get; set; }
        public DateTime? LastModificationTime { get; set; }
    }
}
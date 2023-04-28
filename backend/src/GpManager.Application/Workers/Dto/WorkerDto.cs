using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Abp.Application.Services.Dto;

namespace GpManager.Workers.Dto
{
    public class WorkerDto: EntityDto<int>
    {
        public string Name { get; set; }
        public string PhoneNumber { get; set; }
        public bool IsActive { get; set; }

        public DateTime CreationTime { get; set; }
        public long? CreatorUserId { get; set; }
        public long? LastModifierUserId { get; set; }
        public DateTime? LastModificationTime { get; set; }
    }
}
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Abp.AutoMapper;
using GpManager.Instituitions;

namespace GpManager.TypeAllocations.Dto
{
    [AutoMapFrom(typeof(TypeAllocation))]
    public class CreateTypeAllocationDto
    {
        public string Description { get; set; }
        public bool IsActive { get; set; }
    }
}
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GpManager.Allocations.Dto
{
    public class PagedAllocationResultRequestDto
    {
        public string Keyword { get; set; }
        public bool? IsActive { get; set; }
    }
}
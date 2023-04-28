using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GpManager.Workers.Dto
{
    public class PagedWorkerResultRequestDto
    {
        public string Keyword { get; set; }
        public bool? IsActive { get; set; }
    }
}
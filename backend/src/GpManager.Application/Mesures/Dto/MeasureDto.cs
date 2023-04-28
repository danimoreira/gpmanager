using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Abp.Application.Services.Dto;
using Abp.AutoMapper;
using GpManager.Products;

namespace GpManager.Measures.Dto
{
    [AutoMapFrom(typeof(Measure))]
    public class MeasureDto: EntityDto<int>
    {
        public string Description { get; set; }
        public bool IsActive { get; set; }

        public DateTime CreationTime { get; set; }
        public long? CreatorUserId { get; set; }
        public long? LastModifierUserId { get; set; }
        public DateTime? LastModificationTime { get; set; }
    }
}
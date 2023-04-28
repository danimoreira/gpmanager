using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Abp.Application.Services.Dto;
using Abp.AutoMapper;

namespace GpManager.Products.Dto
{
    [AutoMap(typeof(Product))]
    public class ProductDto : EntityDto<int>
    {
        public string Description { get; set; }        
        public int CategoryProductId { get; set; }    
        public int MeasureMainId { get; set; }     
        public int ClosedMeasureId { get; set; }      
        public decimal QuantityClosedMeasure { get; set; }
        public bool IsActive { get; set; }

        public DateTime CreationTime { get; set; }
        public long? CreatorUserId { get; set; }
        public long? LastModifierUserId { get; set; }
        public DateTime? LastModificationTime { get; set; }
    }
}
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Abp.AutoMapper;

namespace GpManager.Products.Dto
{
    [AutoMapFrom(typeof(Product))]
    public class CreateProductDto
    {
        public string Description { get; set; }        
        public int CategoryProductId { get; set; }    
        public int MeasureMainId { get; set; }     
        public int ClosedMeasureId { get; set; }      
        public decimal QuantityClosedMeasure { get; set; }
        public bool IsActive { get; set; }
    }
}
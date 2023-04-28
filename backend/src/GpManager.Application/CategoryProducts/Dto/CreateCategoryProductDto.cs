using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Abp.AutoMapper;
using GpManager.Products;

namespace GpManager.CategoryProducts.Dto
{
    [AutoMapFrom(typeof(CategoryProduct))]
    public class CreateCategoryProductDto
    {
        public string Description { get; set; }
        public bool IsActive { get; set; }
    }
}
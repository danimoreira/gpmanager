using System;
using Abp.Application.Services.Dto;
using Abp.AutoMapper;
using GpManager.Products;

namespace GpManager.CategoryProducts.Dto
{
    [AutoMapFrom(typeof(CategoryProduct))]
    public class CategoryProductDto: EntityDto<int>
    {
        public string Description { get; set; }
        public bool IsActive { get; set; }

        public DateTime CreationTime { get; set; }
        public long? CreatorUserId { get; set; }
        public long? LastModifierUserId { get; set; }
        public DateTime? LastModificationTime { get; set; }
    }
}
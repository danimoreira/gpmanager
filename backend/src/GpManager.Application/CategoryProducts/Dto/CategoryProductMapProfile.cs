using Abp.AutoMapper;
using AutoMapper;
using GpManager.Products;

namespace GpManager.CategoryProducts.Dto
{
    [AutoMapFrom(typeof(CategoryProduct))]
    public class CategoryProductMapProfile : Profile
    {
        public CategoryProductMapProfile()
        {
            CreateMap<CategoryProduct, CategoryProductDto>();
            CreateMap<CategoryProduct, CreateCategoryProductDto>();

            CreateMap<CreateCategoryProductDto, CategoryProduct>();
            CreateMap<CategoryProductDto, CategoryProduct>();
        }

    }
}
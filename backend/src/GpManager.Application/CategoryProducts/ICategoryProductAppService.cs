using Abp.Application.Services;
using GpManager.CategoryProducts.Dto;

namespace GpManager.Products
{
    public interface ICategoryProductAppService: ICrudAppService<CategoryProductDto, int, PagedCategoryProductResultRequestDto, CreateCategoryProductDto, CategoryProductDto>
    {
        
    }
}
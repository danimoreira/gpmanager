using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Abp.Application.Services;
using GpManager.Products.Dto;

namespace GpManager.Products
{
    public interface IProductAppService: ICrudAppService<ProductDto, int, PagedProductResultRequestDto, CreateProductDto, ProductDto>
    {
        
    }
}
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Abp.AutoMapper;
using AutoMapper;

namespace GpManager.Products.Dto
{
    [AutoMapFrom(typeof(Product))]
    public class ProductMapProfile : Profile
    {
        public ProductMapProfile()
        {
            CreateMap<Product, ProductDto>();
            CreateMap<Product, CreateProductDto>();

            CreateMap<CreateProductDto, Product>();
            CreateMap<ProductDto, Product>();
        }
    }
}
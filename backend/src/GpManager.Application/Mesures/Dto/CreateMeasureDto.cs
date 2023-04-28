using Abp.AutoMapper;
using GpManager.Products;

namespace GpManager.Measures.Dto
{
    [AutoMapFrom(typeof(Measure))]
    public class CreateMeasureDto
    {
        public string Description { get; set; }
        public bool IsActive { get; set; }
    }
}
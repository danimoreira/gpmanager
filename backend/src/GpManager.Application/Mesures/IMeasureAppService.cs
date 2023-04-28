using Abp.Application.Services;
using GpManager.Measures.Dto;

namespace GpManager.Products
{
    public interface IMeasureAppService : ICrudAppService<MeasureDto, int, PagedMeasureResultRequestDto, CreateMeasureDto, MeasureDto>
    {
        
    }
}
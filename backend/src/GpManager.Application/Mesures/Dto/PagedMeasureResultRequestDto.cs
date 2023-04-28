using Abp.Application.Services.Dto;

namespace GpManager.Measures.Dto
{
    public class PagedMeasureResultRequestDto: PagedResultRequestDto
    {
        public string Keyword { get; set; }
        public bool? IsActive { get; set; }
    }
}
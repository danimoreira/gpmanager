using Abp.Application.Services.Dto;

namespace GpManager.TypeAllocations.Dto
{
    public class PagedTypeAllocationResultRequestDto: PagedResultRequestDto
    {
        public string Keyword { get; set; }
        public bool? IsActive { get; set; }
    }
}
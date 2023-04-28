using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Abp.Application.Services;
using GpManager.TypeAllocations.Dto;

namespace GpManager.TypeAllocations
{
    public interface ITypeAllocationAppService: ICrudAppService<TypeAllocationDto, int, PagedTypeAllocationResultRequestDto, CreateTypeAllocationDto, TypeAllocationDto>
    {
        
    }
}
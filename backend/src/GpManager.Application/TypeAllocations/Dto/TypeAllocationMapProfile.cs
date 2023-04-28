using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Abp.AutoMapper;
using AutoMapper;
using GpManager.Instituitions;

namespace GpManager.TypeAllocations.Dto
{
    [AutoMapFrom(typeof(TypeAllocation))]
    public class TypeAllocationMapProfile: Profile
    {
        public TypeAllocationMapProfile()
        {
            CreateMap<TypeAllocation, TypeAllocationDto>();
            CreateMap<TypeAllocation, CreateTypeAllocationDto>();

            CreateMap<CreateTypeAllocationDto, TypeAllocation>();
            CreateMap<TypeAllocationDto, TypeAllocation>();
        }
    }
}
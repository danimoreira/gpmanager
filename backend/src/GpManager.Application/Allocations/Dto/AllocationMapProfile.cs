using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Abp.AutoMapper;
using AutoMapper;
using GpManager.Instituitions;

namespace GpManager.Allocations.Dto
{
    [AutoMapFrom(typeof(Allocation))]
    public class AllocationMapProfile : Profile
    {
        public AllocationMapProfile()
        {
            CreateMap<Allocation, AllocationDto>();
            CreateMap<Allocation, CreateAllocationDto>();

            CreateMap<CreateAllocationDto, Allocation>();
            CreateMap<AllocationDto, Allocation>();
        }
    }
}
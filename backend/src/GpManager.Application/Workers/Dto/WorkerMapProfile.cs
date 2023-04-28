using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Abp.AutoMapper;
using AutoMapper;
using GpManager.Employees;

namespace GpManager.Workers.Dto
{
    [AutoMapFrom(typeof(Worker))]
    public class WorkerMapProfile : Profile
    {
        public WorkerMapProfile()
        {
            CreateMap<Worker, WorkerDto>();
            CreateMap<Worker, CreateWorkerDto>();

            CreateMap<CreateWorkerDto, Worker>();
            CreateMap<WorkerDto, Worker>();
        }
    }
}
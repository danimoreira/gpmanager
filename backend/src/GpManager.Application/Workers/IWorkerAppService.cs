using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Abp.Application.Services;
using GpManager.Workers.Dto;

namespace GpManager.Workers
{
    public interface IWorkerAppService: ICrudAppService<WorkerDto, int, PagedWorkerResultRequestDto, CreateWorkerDto, WorkerDto>
    {
        
    }
}
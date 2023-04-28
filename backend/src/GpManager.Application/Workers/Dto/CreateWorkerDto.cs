using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Abp.AutoMapper;
using GpManager.Employees;

namespace GpManager.Workers.Dto
{
    [AutoMapFrom(typeof(Worker))]
    public class CreateWorkerDto
    {
        public string Name { get; set; }
        public string PhoneNumber { get; set; }
        public bool IsActive { get; set; }
    }
}
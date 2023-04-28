using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Abp.Application.Services.Dto;
using Abp.AutoMapper;
using GpManager.Instituitions;
using GpManager.ValueObjects;

namespace GpManager.Companies.Dto
{
    [AutoMap(typeof(Company))]
    public class CompanyDto: EntityDto<int>
    {
        public string Name { get; set; }
        public Address Address { get; set; }
        public string Email { get; set; }
        public string PhoneContact { get; set; }
        public bool IsActive { get; set; }

        public DateTime CreationTime { get; set; }
        public long? CreatorUserId { get; set; }
        public long? LastModifierUserId { get; set; }
        public DateTime? LastModificationTime { get; set; }
    }
}
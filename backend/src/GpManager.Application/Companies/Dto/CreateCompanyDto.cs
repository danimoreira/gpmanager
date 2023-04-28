using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Abp.AutoMapper;
using GpManager.Instituitions;
using GpManager.ValueObjects;

namespace GpManager.Companies.Dto
{
    [AutoMapFrom(typeof(Company))]
    public class CreateCompanyDto
    {
        public string Name { get; set; }
        public Address Address { get; set; }
        public string Email { get; set; }
        public string PhoneContact { get; set; }
        public bool IsActive { get; set; }
    }
}
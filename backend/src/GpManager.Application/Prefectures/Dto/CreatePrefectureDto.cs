using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Abp.AutoMapper;
using GpManager.Instituitions;
using GpManager.ValueObjects;

namespace GpManager.Prefectures.Dto
{
    [AutoMapFrom(typeof(Prefecture))]
    public class CreatePrefectureDto
    {
        public int IdInternal { get; set; }
        public string Name { get; set; }
        public Address Address { get; set; }
        public string Cnpj { get; set; }
        public bool IsActive { get; set; }
    }
}
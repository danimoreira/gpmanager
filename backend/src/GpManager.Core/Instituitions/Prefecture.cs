using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using Abp.Domain.Entities;
using Abp.Domain.Entities.Auditing;
using Abp.Timing;
using GpManager.ValueObjects;

namespace GpManager.Instituitions
{
    public class Prefecture : Entity, IAudited
    {
        public const int MaxNameLength = 150;
        public const int MaxCityLength = 50;
        public const int MaxUfLength = 2;
        public const int MaxCnpjLength = 18;

        public DateTime CreationTime { get; set; }
        public long? CreatorUserId { get; set; }
        public long? LastModifierUserId { get; set; }
        public DateTime? LastModificationTime { get; set; }

        [Required]
        public int IdInternal { get; set; }

        [Required]
        [StringLength(MaxNameLength)]
        public string Name { get; set; }

        [Required]
        public Address Address { get; set; }

        [Required]
        [StringLength(MaxCnpjLength)]
        public string Cnpj { get; set; }

        [Required]
        public bool IsActive { get; set; }

        public List<Allocation> Allocations { get; set; }

        public Prefecture()
        {
            this.IsActive = true;
            CreationTime = Clock.Now;
        }

        public Prefecture(int idInternal, string name, Address address, string cnpj)
        {
            IdInternal = idInternal;
            Name = name;
            Address = address;
            Cnpj = cnpj;
        }
    }
}
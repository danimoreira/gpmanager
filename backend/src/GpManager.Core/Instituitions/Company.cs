using System;
using System.ComponentModel.DataAnnotations;
using Abp.Domain.Entities;
using Abp.Domain.Entities.Auditing;
using Abp.Timing;
using GpManager.ValueObjects;

namespace GpManager.Instituitions
{
    public class Company : Entity, IAudited
    {
        public const int MaxNameLength = 150;

        public DateTime CreationTime { get; set; }
        public long? CreatorUserId { get; set; }
        public long? LastModifierUserId { get; set; }
        public DateTime? LastModificationTime { get; set; }

        [Required]
        [StringLength(MaxNameLength)]
        public string Name { get; set; }
        
        [Required]
        public Address Address { get; set; }

        [Required]
        public string Email { get; set; }

        [Required]
        public string PhoneContact { get; set; }

        [Required]
        public bool IsActive { get; set; }


        public Company()
        {
            this.IsActive = true;
            CreationTime = Clock.Now;
        }

        public Company(string name, Address address, string email, string phoneContact)
        {
            Name = name;
            Address = address;
            Email = email;
            PhoneContact = phoneContact;
        }
    }
}
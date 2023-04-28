using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using Abp.Domain.Entities;
using Abp.Domain.Entities.Auditing;
using Abp.Timing;

namespace GpManager.Employees
{
    public class Worker: Entity, IAudited
    {
        public const int MaxNameLength = 150;
        public const int MaxPhoneLength = 15;

        public DateTime CreationTime { get; set; }
        public long? CreatorUserId { get; set; }
        public long? LastModifierUserId { get; set; }
        public DateTime? LastModificationTime { get; set; }

        
        [Required]
        [StringLength(MaxNameLength)]
        public string Name { get; set; }

        [Required]
        [StringLength(MaxPhoneLength)]
        public string PhoneNumber { get; set; }

        [Required]
        public bool IsActive { get; set; }

        public Worker()
        {
            this.IsActive = true;
            CreationTime = Clock.Now;
        }


    }
}
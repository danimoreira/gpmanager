using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using Abp.Domain.Entities;
using Abp.Domain.Entities.Auditing;

namespace GpManager.Instituitions
{
    public class TypeAllocation : Entity, IAudited
    {
        public const int MaxDescriptionLength = 30;

        public DateTime CreationTime { get; set; }
        public long? CreatorUserId { get; set; }
        public long? LastModifierUserId { get; set; }
        public DateTime? LastModificationTime { get; set; }
        
        [Required]
        [StringLength(MaxDescriptionLength)]
        public string Description { get; set; }

        [Required]
        public bool IsActive { get; set; }


        public List<Allocation> Allocations { get; set; }
    }
}
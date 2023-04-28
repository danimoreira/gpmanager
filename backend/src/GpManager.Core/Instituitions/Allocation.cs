using System;
using System.ComponentModel.DataAnnotations;
using Abp.Domain.Entities;
using Abp.Domain.Entities.Auditing;
using Abp.Timing;
using GpManager.ValueObjects;

namespace GpManager.Instituitions
{
    public class Allocation : Entity, IAudited
    {
        public const int MaxNameLength = 150;


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
        public string InitialTimeOperation { get; set; }
        [Required]
        public string FinalTimeOperation { get; set; }

        [Required]
        public int TypeAllocationId { get; set; }
        public TypeAllocation TypeAllocation { get; set; }

        [Required]
        public int PrefectureId { get; set; }
        public Prefecture Prefecture { get; set; }

        [Required]
        public bool IsActive { get; set; }

        public Allocation()
        {
            this.IsActive = true;
            CreationTime = Clock.Now;
        }

        public Allocation(int idInternal, string name, Address address, string initialTimeOperation, string finalTimeOperation, int typeAllocationId, TypeAllocation typeAllocation, int prefectureId)
        {
            IdInternal = idInternal;
            Name = name;
            Address = address;
            InitialTimeOperation = initialTimeOperation;
            FinalTimeOperation = finalTimeOperation;
            TypeAllocationId = typeAllocationId;
            TypeAllocation = typeAllocation;
            PrefectureId = prefectureId;
        }
    }
}
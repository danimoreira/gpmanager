using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;
using Abp.Domain.Entities;
using Abp.Domain.Entities.Auditing;
using Abp.Timing;

namespace GpManager.Products
{
    public class Measure : Entity, IAudited
    {
        public const int MaxDescriptionLength = 20;

        public Measure()
        {
            this.IsActive = true;
            CreationTime = Clock.Now;
        }

        public Measure(string description)
        {
            Description = description;
        }

        public DateTime CreationTime { get; set; }
        public long? CreatorUserId { get; set; }
        public long? LastModifierUserId { get; set; }
        public DateTime? LastModificationTime { get; set; }

        [Required]
        [StringLength(MaxDescriptionLength)]
        public string Description { get; set; }

        [Required]
        public bool IsActive { get; set; }

        [InverseProperty("MeasureMain")]
        public List<Product> MeasureMainProducts { get; set; }

        [InverseProperty("ClosedMeasure")]
        public List<Product> ClosedMeasureProducts { get; set; }
    }
}
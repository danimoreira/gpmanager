using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using Abp.Domain.Entities;
using Abp.Domain.Entities.Auditing;
using Abp.Timing;

namespace GpManager.Products
{
    public class CategoryProduct : Entity, IAudited
    {
        public const int MaxDescriptionLength = 50;
        
        public DateTime CreationTime { get; set; }
        public long? CreatorUserId { get; set; }
        public long? LastModifierUserId { get; set; }
        public DateTime? LastModificationTime { get; set; }

        [Required]
        [StringLength(MaxDescriptionLength)]
        public string Description { get; set; }

        [Required]
        public bool IsActive { get; set; }

        public List<Product> Products { get; set; }

        public CategoryProduct()
        {
            this.IsActive = true;
            CreationTime = Clock.Now;
        }

        public CategoryProduct(string description)
        {
            this.Description = description;
        }
    }
}
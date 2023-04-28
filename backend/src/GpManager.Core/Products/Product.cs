using System;
using System.ComponentModel.DataAnnotations;
using Abp.Domain.Entities;
using Abp.Domain.Entities.Auditing;
using Abp.Timing;

namespace GpManager.Products
{
    public class Product: Entity, IAudited
    {
        public const int MaxDescriptionLength = 40;

        public DateTime CreationTime { get; set; }
        public long? CreatorUserId { get; set; }
        public long? LastModifierUserId { get; set; }
        public DateTime? LastModificationTime { get; set; }

        [Required]
        [StringLength(MaxDescriptionLength)]
        public string Description { get; set; }

        [Required]
        public int CategoryProductId { get; set; }
        public CategoryProduct CategoryProduct { get; set; }

        [Required]
        public int MeasureMainId { get; set; }
        public Measure MeasureMain { get; set; }

        [Required]
        public int ClosedMeasureId { get; set; }
        public Measure ClosedMeasure { get; set; }

        [Required]
        public decimal QuantityClosedMeasure { get; set; }

        [Required]
        public bool IsActive { get; set; }

        public Product()
        {
            this.IsActive = true;
            CreationTime = Clock.Now;
        }

        public Product(string description, Measure measureMain, decimal quantityClosedMeasure)
        {
            Description = description;
            MeasureMain = measureMain;
            // ClosedMeasure = closedMeasure;
            QuantityClosedMeasure = quantityClosedMeasure;
        }
    }
}
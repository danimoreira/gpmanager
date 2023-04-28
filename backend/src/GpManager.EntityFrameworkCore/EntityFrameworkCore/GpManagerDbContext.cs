using Microsoft.EntityFrameworkCore;
using Abp.Zero.EntityFrameworkCore;
using GpManager.Authorization.Roles;
using GpManager.Authorization.Users;
using GpManager.MultiTenancy;
using GpManager.Instituitions;
using GpManager.Products;
using GpManager.Employees;

namespace GpManager.EntityFrameworkCore
{
    public class GpManagerDbContext : AbpZeroDbContext<Tenant, Role, User, GpManagerDbContext>
    {
        /* Define a DbSet for each entity of the application */
        public DbSet<Measure> Measures { get; set; }
        public DbSet<TypeAllocation> TypeAllocations { get; set; }
        public DbSet<CategoryProduct> CategoryProducts { get; set; }

        public DbSet<Prefecture> Prefectures { get; set; }
        public DbSet<Allocation> Allocations {get; set;}
        public DbSet<Company> Companies {get; set;}
        public DbSet<Product> Products { get; set; }
        public DbSet<Worker> Workers { get; set; }        
        
        public GpManagerDbContext(DbContextOptions<GpManagerDbContext> options)
            : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<Allocation>()
            .HasOne(p => p.Prefecture)
            .WithMany(b => b.Allocations)
            .HasForeignKey(p => p.PrefectureId);

            modelBuilder.Entity<Allocation>()
            .HasOne(p => p.TypeAllocation)
            .WithMany(b => b.Allocations)
            .HasForeignKey(p => p.TypeAllocationId);

            modelBuilder.Entity<Product>()
            .Property(x => x.QuantityClosedMeasure)
            .HasPrecision(8,2);

            modelBuilder.Entity<Product>()
            .HasOne(p => p.MeasureMain)
            .WithMany(b => b.MeasureMainProducts)
            .HasForeignKey(p => p.MeasureMainId)
            .OnDelete(DeleteBehavior.NoAction);

            modelBuilder.Entity<Product>()
            .HasOne(p => p.ClosedMeasure)
            .WithMany(b => b.ClosedMeasureProducts)
            .HasForeignKey(p => p.ClosedMeasureId)
            .OnDelete(DeleteBehavior.NoAction);

            modelBuilder.Entity<Product>()
            .HasOne(p => p.ClosedMeasure);

            modelBuilder.Entity<Product>()
            .HasOne(p => p.CategoryProduct)
            .WithMany(b => b.Products)
            .HasForeignKey(p => p.CategoryProductId);

            // Address Company
            modelBuilder.Entity<Company>()
            .OwnsOne(x => x.Address)
            .Property(x => x.Street)
            .HasColumnName("Street");

            modelBuilder.Entity<Company>()
            .OwnsOne(x => x.Address)
            .Property(x => x.Number)
            .HasColumnName("Number");

            modelBuilder.Entity<Company>()
            .OwnsOne(x => x.Address)
            .Property(x => x.Complement)
            .HasColumnName("Complement");

            modelBuilder.Entity<Company>()
            .OwnsOne(x => x.Address)
            .Property(x => x.District)
            .HasColumnName("District");

            modelBuilder.Entity<Company>()
            .OwnsOne(x => x.Address)
            .Property(x => x.City)
            .HasColumnName("City");

            modelBuilder.Entity<Company>()
            .OwnsOne(x => x.Address)
            .Property(x => x.State)
            .HasColumnName("State");

            modelBuilder.Entity<Company>()
            .OwnsOne(x => x.Address)
            .Property(x => x.ZipCode)
            .HasColumnName("ZipCode");

            // Address Prefecture
            modelBuilder.Entity<Prefecture>()
            .OwnsOne(x => x.Address)
            .Property(x => x.Street)
            .HasColumnName("Street");

            modelBuilder.Entity<Prefecture>()
            .OwnsOne(x => x.Address)
            .Property(x => x.Number)
            .HasColumnName("Number");

            modelBuilder.Entity<Prefecture>()
            .OwnsOne(x => x.Address)
            .Property(x => x.Complement)
            .HasColumnName("Complement");

            modelBuilder.Entity<Prefecture>()
            .OwnsOne(x => x.Address)
            .Property(x => x.District)
            .HasColumnName("District");

            modelBuilder.Entity<Prefecture>()
            .OwnsOne(x => x.Address)
            .Property(x => x.City)
            .HasColumnName("City");

            modelBuilder.Entity<Prefecture>()
            .OwnsOne(x => x.Address)
            .Property(x => x.State)
            .HasColumnName("State");

            modelBuilder.Entity<Prefecture>()
            .OwnsOne(x => x.Address)
            .Property(x => x.ZipCode)
            .HasColumnName("ZipCode");

            // Address Allocation
            modelBuilder.Entity<Allocation>()
            .OwnsOne(x => x.Address)
            .Property(x => x.Street)
            .HasColumnName("Street");

            modelBuilder.Entity<Allocation>()
            .OwnsOne(x => x.Address)
            .Property(x => x.Number)
            .HasColumnName("Number");

            modelBuilder.Entity<Allocation>()
            .OwnsOne(x => x.Address)
            .Property(x => x.Complement)
            .HasColumnName("Complement");

            modelBuilder.Entity<Allocation>()
            .OwnsOne(x => x.Address)
            .Property(x => x.District)
            .HasColumnName("District");

            modelBuilder.Entity<Allocation>()
            .OwnsOne(x => x.Address)
            .Property(x => x.City)
            .HasColumnName("City");

            modelBuilder.Entity<Allocation>()
            .OwnsOne(x => x.Address)
            .Property(x => x.State)
            .HasColumnName("State");

            modelBuilder.Entity<Allocation>()
            .OwnsOne(x => x.Address)
            .Property(x => x.ZipCode)
            .HasColumnName("ZipCode");
        }
    }
}

using System.Data.Common;
using Microsoft.EntityFrameworkCore;

namespace GpManager.EntityFrameworkCore
{
    public static class GpManagerDbContextConfigurer
    {
        public static void Configure(DbContextOptionsBuilder<GpManagerDbContext> builder, string connectionString)
        {
            builder.UseSqlServer(connectionString);
        }

        public static void Configure(DbContextOptionsBuilder<GpManagerDbContext> builder, DbConnection connection)
        {
            builder.UseSqlServer(connection);
        }
    }
}

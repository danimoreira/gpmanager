using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Abp.EntityFrameworkCore;
using GpManager.Instituitions;
using GpManager.Instituitions.Repositories;

namespace GpManager.EntityFrameworkCore.Repositories
{
    public class PrefectureRepository: GpManagerRepositoryBase<Prefecture>, IPrefectureRepository
    {
        private readonly IDbContextProvider<GpManagerDbContext> _dbContextProvider;
        public PrefectureRepository(IDbContextProvider<GpManagerDbContext> dbContextProvider) : base(dbContextProvider)
        {
            _dbContextProvider = dbContextProvider;
        }

        public override Prefecture Update(Prefecture entity)
        {
            var context = _dbContextProvider.GetDbContext();
            var result = context.Update(entity);
            return result.Entity;
        }
    }
}
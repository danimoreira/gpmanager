using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GpManager.Instituitions.Repositories
{
    public interface IPrefectureRepository
    {
        Prefecture Update(Prefecture input);
    }
}
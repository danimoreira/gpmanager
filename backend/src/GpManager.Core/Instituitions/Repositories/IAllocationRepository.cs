using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GpManager.Instituitions.Repositories
{
    public interface IAllocationRepository
    {
        Allocation Update(Allocation input);
    }
}
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GpManager.Prefectures.Dto
{
    public class PagedPrefectureResultRequestDto
    {
        public string Keyword { get; set; }
        public bool? IsActive { get; set; }
    }
}
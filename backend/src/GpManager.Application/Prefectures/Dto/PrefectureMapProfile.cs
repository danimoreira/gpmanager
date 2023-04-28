using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Abp.AutoMapper;
using AutoMapper;
using GpManager.Instituitions;

namespace GpManager.Prefectures.Dto
{
    [AutoMapFrom(typeof(Prefecture))]
    public class PrefectureMapProfile: Profile
    {
        public PrefectureMapProfile()
        {
            CreateMap<Prefecture, PrefectureDto>();
            CreateMap<Prefecture, CreatePrefectureDto>();

            CreateMap<CreatePrefectureDto, Prefecture>();
            CreateMap<PrefectureDto, Prefecture>();
        }
    }
}
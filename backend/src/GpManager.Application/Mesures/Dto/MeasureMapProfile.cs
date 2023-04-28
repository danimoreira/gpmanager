using AutoMapper;
using GpManager.Products;

namespace GpManager.Measures.Dto
{
    public class MeasureMapProfile : Profile
    {
        public MeasureMapProfile()
        {
            CreateMap<Measure, MeasureDto>();
            CreateMap<Measure, CreateMeasureDto>();

            CreateMap<CreateMeasureDto, Measure>();
            CreateMap<MeasureDto, Measure>();
        }
    }
}
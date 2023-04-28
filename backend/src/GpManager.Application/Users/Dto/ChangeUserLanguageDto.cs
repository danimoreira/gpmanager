using System.ComponentModel.DataAnnotations;

namespace GpManager.Users.Dto
{
    public class ChangeUserLanguageDto
    {
        [Required]
        public string LanguageName { get; set; }
    }
}
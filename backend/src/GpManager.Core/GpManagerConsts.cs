using GpManager.Debugging;

namespace GpManager
{
    public class GpManagerConsts
    {
        public const string LocalizationSourceName = "GpManager";

        public const string ConnectionStringName = "Default";

        public const bool MultiTenancyEnabled = true;


        /// <summary>
        /// Default pass phrase for SimpleStringCipher decrypt/encrypt operations
        /// </summary>
        public static readonly string DefaultPassPhrase =
            DebugHelper.IsDebug ? "gsKxGZ012HLL3MI5" : "75442cca560d4b308fe8cbf3503b1a8d";
    }
}

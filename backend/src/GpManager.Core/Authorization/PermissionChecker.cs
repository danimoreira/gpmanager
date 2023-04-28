using Abp.Authorization;
using GpManager.Authorization.Roles;
using GpManager.Authorization.Users;

namespace GpManager.Authorization
{
    public class PermissionChecker : PermissionChecker<Role, User>
    {
        public PermissionChecker(UserManager userManager)
            : base(userManager)
        {
        }
    }
}

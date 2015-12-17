using Microsoft.AspNet.Identity.EntityFramework;

namespace Icb.Domain.Entities
{
    public class ApplicationUser : IdentityUser
    {
        public Person Person { get; set; }
    }
}

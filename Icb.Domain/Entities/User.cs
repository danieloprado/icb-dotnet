using Microsoft.AspNet.Identity.EntityFramework;

namespace Icb.Domain.Entities
{
    public class User : IdentityUser
    {
        public Person Person { get; set; }
    }
}

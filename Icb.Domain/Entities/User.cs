using System;
using Microsoft.AspNet.Identity.EntityFramework;

namespace Icb.Domain.Entities
{
    public class User : IdentityUser
    {
        public Person Person { get; set; }

        public static User Create(string firstName, string lastName, string email)
        {
            return new User()
            {
                Id = Guid.NewGuid().ToString(),
                UserName = email,
                Email = email,
                Person = Person.Create(firstName, lastName, email)
            };
        }
    }
}

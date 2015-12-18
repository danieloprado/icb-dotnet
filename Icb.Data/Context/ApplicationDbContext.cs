using Icb.Data.Mapping;
using Icb.Domain.Entities;
using Microsoft.AspNet.Identity.EntityFramework;
using Microsoft.Data.Entity;

namespace Icb.Data.Context
{
    public class ApplicationDbContext : IdentityDbContext<User>
    {
        public DbSet<Person> Person { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            AddressMap.Map(builder);
            AlertMap.Map(builder);
            EventCategoryMap.Map(builder);
            EventMap.Map(builder);
            PersonMap.Map(builder);
            UserMap.Map(builder);
        }
    }
}
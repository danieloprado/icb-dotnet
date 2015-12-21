using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Icb.Domain.Entities;
using Microsoft.Data.Entity;

namespace Icb.Data.Mapping
{
    public static class UserMap
    {
        public static void Map(ModelBuilder builder)
        {
            //Extra fields
            var entity = builder.Entity<User>();

            entity.HasOne(p => p.Person)
                  .WithOne(x => x.User);
        }
    }
}

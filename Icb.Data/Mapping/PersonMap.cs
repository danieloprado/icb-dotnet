using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Icb.Domain.Entities;
using Microsoft.Data.Entity;
using Microsoft.Data.Entity.Metadata.Builders;

namespace Icb.Data.Mapping
{
    public static class PersonMap
    {
        public static void Map(ModelBuilder builder)
        {
            var entity = builder.Entity<Person>();

            entity.HasKey(p => p.Id);

            entity.Property(p => p.Id)
                .ValueGeneratedOnAdd();

            entity.Property(p => p.FirstName)
                .IsRequired()
                .HasMaxLength(100);

            entity.Property(p => p.LastName)
                .IsRequired()
                .HasMaxLength(100);

            entity.Ignore(p => p.FullName);

            entity.Property(p => p.Email)
              .HasMaxLength(256);

            entity.Property(p => p.DeletedDate);
        }
    }


}

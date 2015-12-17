using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Icb.Domain.Entities;
using Icb.Domain.ValueObjects;
using Microsoft.Data.Entity;
using Microsoft.Data.Entity.Metadata.Builders;

namespace Icb.Data.Mapping
{
    public class PersonMap
    {
        public static void Map(ModelBuilder builder)
        {
            var entity = builder.Entity<Person>();

            entity.HasKey(p => p.Id);

            entity.Property(p => p.Id)
                .ValueGeneratedOnAdd();

            //NAME
            entity.Property(p => p.FirstName)
                .IsRequired()
                .HasMaxLength(100);

            entity.Property(p => p.LastName)
                .IsRequired()
                .HasMaxLength(100);

            entity.Ignore(p => p.FullName);

            //ADDRESS
            entity.Property(p => p.Address1)
                .HasMaxLength(256);

            entity.Property(p => p.Address2)
                .HasMaxLength(100);

            entity.Property(p => p.City)
                .HasMaxLength(256);

            entity.Property(p => p.State)
                .HasMaxLength(2);

            entity.Property(p => p.Zipcode)
              .HasMaxLength(8);

            entity.Property(p => p.Latitude);

            entity.Property(p => p.Longitude);

            //PROPS
            entity.Property(p => p.Email)
              .HasMaxLength(256);
        }
    }


}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Icb.Domain.Entities;
using Microsoft.Data.Entity;

namespace Icb.Data.Mapping
{
    public static class AddressMap
    {
        public static void Map(ModelBuilder builder)
        {
            var entity = builder.Entity<Address>();

            entity.HasKey(p => p.Id);

            entity.Property(p => p.Id)
                .ValueGeneratedOnAdd();

            entity.Property(p => p.Address1)
                .IsRequired()
                .HasMaxLength(256);

            entity.Property(p => p.Address2)
                .IsRequired()
                .HasMaxLength(100);

            entity.Property(p => p.City)
                .IsRequired()
                .HasMaxLength(256);

            entity.Property(p => p.State)
                .IsRequired()
                .HasMaxLength(2);

            entity.Property(p => p.Zipcode)
                .IsRequired()
                .HasMaxLength(8);

            entity.Property(p => p.Latitude);

            entity.Property(p => p.Longitude);
        }
    }
}

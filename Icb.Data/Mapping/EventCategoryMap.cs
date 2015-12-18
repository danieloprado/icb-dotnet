using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Icb.Domain.Entities;
using Microsoft.Data.Entity;

namespace Icb.Data.Mapping
{
    public class EventCategoryMap
    {
        public static void Map(ModelBuilder builder)
        {
            var entity = builder.Entity<EventCategory>();

            entity.HasKey(p => p.Id);

            entity.Property(p => p.Id)
                .ValueGeneratedOnAdd();

            entity.Property(p => p.Name)
                .IsRequired()
                .HasMaxLength(100);

            entity.Property(p => p.IsDeleted)
                .IsRequired()
                .HasDefaultValue(false);

            //FK
            entity.HasMany(p => p.Events)
                  .WithOne(x => x.Category);
        }
    }
}

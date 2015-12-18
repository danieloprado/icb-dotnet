using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Icb.Domain.Entities;
using Microsoft.Data.Entity;

namespace Icb.Data.Mapping
{
    public class EventMap
    {
        public static void Map(ModelBuilder builder)
        {
            var entity = builder.Entity<Event>();

            entity.HasKey(p => p.Id);

            entity.Property(p => p.Id)
                .ValueGeneratedOnAdd();

            entity.Property(p => p.Title)
                .IsRequired()
                .HasMaxLength(100);

            entity.Property(p => p.Description)
                .IsRequired()
                .HasMaxLength(2000);

            entity.Property(p => p.Date)
                .IsRequired();

            //FK
            entity.HasOne(p => p.Category)
                  .WithMany(p=> p.Events)
                  .IsRequired();
            
        }
    }
}

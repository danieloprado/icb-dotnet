using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Icb.Domain.Entities;
using Microsoft.Data.Entity;

namespace Icb.Data.Mapping
{
    public static class CellMessageMap
    {
        public static void Map(ModelBuilder builder)
        {
            var entity = builder.Entity<CellMessage>();

            entity.HasKey(p => p.Id);

            entity.Property(p => p.Id)
                .ValueGeneratedOnAdd();

            entity.Property(p => p.Title)
                .IsRequired();

            entity.Property(p => p.Message)
                .IsRequired();

            entity.Property(p => p.CreateDate)
                .IsRequired();
        }
    }
}

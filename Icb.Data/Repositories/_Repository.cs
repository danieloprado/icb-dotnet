using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Threading.Tasks;
using Icb.Data.Context;
using Icb.Domain.Interfaces;
using Icb.Domain.Interfaces.Repositories;

namespace Icb.Data.Repositories
{
    public abstract class Repository
    {
        protected readonly ApplicationDbContext Db;

        protected Repository(ApplicationDbContext db)
        {
            Db = db;
        }
    }
}

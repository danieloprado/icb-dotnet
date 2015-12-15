﻿using System.Threading.Tasks;

namespace Icb.Domain.Interfaces.Repositories
{
    public interface IRepository<E> where E : IEntity
    {
        Task<E> Find(string id);
    }
}
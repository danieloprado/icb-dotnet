using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Icb.Domain.Entities;

namespace Icb.Domain.Interfaces.Repositories
{
    public interface IPersonRepository
    {
        Task<Person> Find(int id);

        Task<Person> Insert(Person person);
    }
}

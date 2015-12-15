using Icb.Domain.Entities;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Icb.Domain.Interfaces.Repositories
{
    public interface IPersonRepository : IRepository<Person>
    {
        Task<List<Person>> List();
        Task<Person> Insert(Person person);
    }
}

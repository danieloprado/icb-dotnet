using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Icb.Data.Context;
using Icb.Domain.Entities;
using Icb.Domain.Interfaces.Repositories;
using Microsoft.Data.Entity;

namespace Icb.Data.Repositories
{
    public class PersonRepository : Repository, IPersonRepository
    {
        public PersonRepository(ApplicationDbContext database) : base(database)
        {

        }

        public async Task<Person> Find(int id)
        {
            return await Db.Person.FirstOrDefaultAsync(m => m.Id == id);
        }

        public async Task<Person> FindByUser(string username)
        {
            return await Db.Person.Include(x => x.User).FirstOrDefaultAsync(m => m.User.Email == username);
        }

        public Task<Person> Insert(Person person)
        {
            throw new NotImplementedException();
        }
    }
}

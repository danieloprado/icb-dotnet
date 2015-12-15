using Icb.Domain.Entities;
using Icb.Domain.Interfaces.Repositories;
using MongoDB.Bson;
using MongoDB.Driver;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Icb.Infra.Repositories
{
    public class PersonRepository : Repository<Person>, IPersonRepository
    {
        public PersonRepository() : base("person")
        {

        }

        public async Task<List<Person>> List()
        {
            return await Collection.FindAsync(new BsonDocument()).Result.ToListAsync();
        }

        public async Task<Person> Insert(Person person)
        {
            GenerateNewId(person);

            await Collection.InsertOneAsync(person);
            return person;
        }

    }
}

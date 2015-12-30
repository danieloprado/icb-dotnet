using Icb.Domain.Interfaces;
using MongoDB.Bson;
using MongoDB.Driver;
using MongoDB.Driver.Linq;
using System.Configuration;
using System.Threading.Tasks;

namespace Icb.Infra.Repositories
{
    public abstract class Repository<E> where E : IEntity
    {
        protected readonly IMongoCollection<E> Collection;

        protected Repository(string collectionName)
        {
           // var client = new MongoClient(ConfigurationManager.ConnectionStrings["MongoDb"].ToString());

            //var db = client.GetDatabase(ConfigurationManager.AppSettings["MongoDb.Database"]);
            //Collection = db.GetCollection<E>(collectionName);
        }

        public virtual async Task<E> Find(string id)
        {
            return await MongoQueryable.FirstOrDefaultAsync(Collection.AsQueryable().Where(x => x.Id == id));
        }

        protected IEntity GenerateNewId(IEntity entity)
        {
            entity.Id = ObjectId.GenerateNewId().ToString();
            return entity;
        }
    }
}

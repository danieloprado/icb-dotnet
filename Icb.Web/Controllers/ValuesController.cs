using Icb.Domain.Entities;
using Icb.Domain.Interfaces.Repositories;
using System.Threading.Tasks;
using System.Web.Http;

namespace Icb.Web.Controllers
{
    [Authorize]
    public class ValuesController : ApiController
    {
        private readonly IPersonRepository _personRepository;

        public ValuesController(IPersonRepository personRepository)
        {
            _personRepository = personRepository;
        }

        // GET api/values
        [AllowAnonymous]
        public async Task<Person> Get()
        {
            var person = await _personRepository.Find("5670015e18727f5e6813a916");
            return person;
        }

        // GET api/values/5
        //public string Get(int id)
        //{
        //    return "value";
        //}

        // POST api/values
        public void Post([FromBody]string value)
        {
        }

        // PUT api/values/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        public void Delete(int id)
        {
        }
    }
}

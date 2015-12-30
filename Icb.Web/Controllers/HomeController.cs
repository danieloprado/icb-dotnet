using Icb.Domain.Interfaces.Repositories;
using System.Threading.Tasks;
using System.Web.Mvc;

namespace Icb.Web.Controllers
{
    public class HomeController : Controller
    {
        private readonly IPersonRepository _personRepository;

        public HomeController(IPersonRepository personRepository)
        {
            _personRepository = personRepository;
        }

        public async Task<ActionResult> Index()
        {
            //var person = Person.Create("daniel");
            //await _personRepository.Insert(person);

            ViewBag.Title = "Home Page";

            return View();
        }
    }
}

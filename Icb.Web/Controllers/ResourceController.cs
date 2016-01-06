using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;

// For more information on enabling MVC for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace Icb.Web.Controllers
{
    public class ResourceController : Controller
    {
        public ActionResult Index()
        {
            return PartialView("~/Views/_Index.cshtml");
        }

        public ActionResult Templates(string url, string path, string area)
        {
            var view = ResolveViewName(url, path, area);

            Response.Headers.Add("X-Rebuild-Validation", "true");
            return View(view);
        }

        private string ResolveViewName(string url, string path, string area)
        {

            if (string.IsNullOrWhiteSpace(path))
            {
                return $"~/Views/{url}.cshtml";
            }

            if (string.IsNullOrWhiteSpace(area))
            {
                return $"~/Views/{path}/{url}.cshtml";
            }

            return $"~/Views/{area}/{path}/{url}.cshtml";
        }
    }
}

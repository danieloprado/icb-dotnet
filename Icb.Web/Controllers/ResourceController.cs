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
        public ActionResult Public()
        {
            return PartialView("~/Views/Public/_Layout.cshtml");
        }

        public ActionResult Admin()
        {
            return PartialView("~/Views/Admin/_Layout.cshtml");
        }

        public ActionResult Templates(string url, string path, string area)
        {
            // area = area ?? path ?? "Shared";

            var view = string.IsNullOrWhiteSpace(area) ?
                $"~/Views/{path}/{url}.cshtml": 
                $"~/Views/{area}/{path}/{url}.cshtml";

            //var result = ViewEngines.Engines.FindView(ControllerContext, view, null);
            Response.Headers.Add("X-Rebuild-Validation", "true");
            return PartialView(view);

           
            Response.Headers.Add("X-Rebuild-Validation", "true");
            return PartialView(view);
        }
    }
}

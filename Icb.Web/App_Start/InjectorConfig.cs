using SimpleInjector;
using SimpleInjector.Integration.Web;
using SimpleInjector.Integration.Web.Mvc;
using System.Web.Http;
using System.Web.Mvc;

namespace Icb.Web.App_Start
{
    public class InjectorConfig
    {
        public static void Setup()
        {
            var container = new Container();
            container.Options.DefaultScopedLifestyle = new WebRequestLifestyle();

            Infra.DependencyInjection.InjectConfigurator.Setup(container);

            container.RegisterWebApiControllers(GlobalConfiguration.Configuration);
#if DEBUG
            //container.Verify();
#endif
            DependencyResolver.SetResolver(new SimpleInjectorDependencyResolver(container));
            //GlobalConfiguration.Configuration.DependencyResolver = new SimpleInjectorDependencyResolver(container);

        }
    }
}
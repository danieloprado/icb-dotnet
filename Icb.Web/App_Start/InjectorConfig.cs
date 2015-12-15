using SimpleInjector;
using SimpleInjector.Integration.WebApi;
using System.Web.Http;

namespace Icb.Web.App_Start
{
    public class InjectorConfig
    {
        public static void Setup()
        {
            var container = new Container();
            container.Options.DefaultScopedLifestyle = new WebApiRequestLifestyle();

            Infra.DependencyInjection.InjectConfigurator.Setup(container);

            container.RegisterWebApiControllers(GlobalConfiguration.Configuration);
#if DEBUG
            //container.Verify();
#endif
            //DependencyResolver.SetResolver(new SimpleInjectorDependencyResolver(container));
            GlobalConfiguration.Configuration.DependencyResolver = new SimpleInjectorWebApiDependencyResolver(container);

        }
    }
}
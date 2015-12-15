using Icb.Domain.Interfaces.Repositories;
using Icb.Infra.Repositories;
using SimpleInjector;

namespace Icb.Infra.DependencyInjection
{
    public class InjectConfigurator
    {
        public static void Setup(Container container)
        {
            container.Register<IPersonRepository, PersonRepository>(Lifestyle.Scoped);
        }
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Icb.Data.Repositories;
using Icb.Domain.Interfaces.Repositories;
using Microsoft.Extensions.DependencyInjection;

namespace Icb.Data.DependencyInjection
{
    public static class ConfigInjection
    {
        public static void Map(IServiceCollection services)
        {
            services.AddScoped<IPersonRepository, PersonRepository>();
        }
    }
}

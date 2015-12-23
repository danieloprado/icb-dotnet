using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Icb.Data.Context;
using Icb.Domain.Entities;
using Microsoft.AspNet.Builder;
using Microsoft.AspNet.Hosting;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using Microsoft.Data.Entity;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using System.IdentityModel.Tokens.Jwt;
using System.IdentityModel;

namespace Icb.Web
{
    public class Startup
    {
        private readonly IConfigurationRoot _configuration;
        public static void Main(string[] args) => WebApplication.Run<Startup>(args);


        public Startup(IHostingEnvironment env)
        {
            var builder = new ConfigurationBuilder()
                .AddJsonFile("appsettings.json")
                .AddJsonFile($"appsettings.{env.EnvironmentName}.json", true);

            if (env.IsDevelopment())
            {
                builder.AddUserSecrets();
            }

            builder.AddEnvironmentVariables();
            _configuration = builder.Build();
        }


        public void ConfigureServices(IServiceCollection services)
        {
            services.AddEntityFramework()
                .AddSqlServer()
                .AddDbContext<ApplicationDbContext>(options =>
                    options.UseSqlServer(_configuration["Data:DefaultConnection:ConnectionString"]));

            services.AddIdentity<User, IdentityRole>()
                .AddEntityFrameworkStores<ApplicationDbContext>()
                .AddDefaultTokenProviders();

            services.AddMvc();

            Data.DependencyInjection.ConfigInjection.Map(services);
        }

        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            loggerFactory.AddConsole(_configuration.GetSection("Logging"));
            loggerFactory.AddDebug();

            if (env.IsDevelopment())
            {
                app.UseBrowserLink();
                app.UseDeveloperExceptionPage();
                app.UseDatabaseErrorPage();
            }
            else
            {
                app.UseExceptionHandler("/Home/Error");

                try
                {
                    using (var serviceScope = app.ApplicationServices.GetRequiredService<IServiceScopeFactory>()
                        .CreateScope())
                    {
                        serviceScope.ServiceProvider.GetService<ApplicationDbContext>()
                             .Database.Migrate();
                    }
                }
                catch
                {
                    // ignored
                }
            }

            app.UseIISPlatformHandler(options => options.AuthenticationDescriptions.Clear());
            app.UseStaticFiles();
            app.UseIdentity();


            IdentityConfig(app);
            RouterConfig(app);
        }

        private static void IdentityConfig(IApplicationBuilder app)
        {
            var userManager = app.ApplicationServices.GetService<UserManager<User>>();
            var user = User.Create("Daniel", "Prado", "danieloprado@outlook.com");

            var userExists = userManager.FindByEmailAsync(user.Email).Result;
            if (userExists == null)
            {
                Task.WaitAll(userManager.CreateAsync(user, "Ng)snuV5Gu)/d7Xe"));
            }
        }

        private static void RouterConfig(IApplicationBuilder app)
        {

            app.UseMvc(routes =>
            {
                routes.MapRoute("templates/area", "templates/{area}/{path}/{url}", new { controller = "Resource", action = "Templates" });
                routes.MapRoute("templates/path", "templates/{path}/{url}", new { controller = "Resource", action = "Templates" });
                routes.MapRoute("default", "{*url}", new {controller = "Resource", action = "Index"});
            });
        }

    }
}

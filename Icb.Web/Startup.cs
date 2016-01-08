using Icb.CrossCutting;
using Icb.Data.Context;
using Icb.Domain.Entities;
using Microsoft.AspNet.Authentication.Cookies;
using Microsoft.AspNet.Authentication.JwtBearer;
using Microsoft.AspNet.Builder;
using Microsoft.AspNet.Hosting;
using Microsoft.AspNet.Http;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using Microsoft.Data.Entity;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.PlatformAbstractions;
using Newtonsoft.Json.Serialization;
using System.Diagnostics;
using System.IO;
using System.Net;
using System.Threading.Tasks;

namespace Icb.Web
{
    public class Startup
    {
        private readonly IConfigurationRoot _configuration;
        private readonly TokenConfig _tokenConfig;
        public static void Main(string[] args) => WebApplication.Run<Startup>(args);


        public Startup(IHostingEnvironment env, IApplicationEnvironment appEnv)
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
            _tokenConfig = new TokenConfig(appEnv, _configuration);


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

            services.AddMvc()
                .AddJsonOptions(options =>
                {
                    options.SerializerSettings.ContractResolver =
                          new CamelCasePropertyNamesContractResolver();

                    options.SerializerSettings.ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore;
                });

            _tokenConfig.Services(services, _configuration);
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

            //BUG: Because some middleware of .net the 401 redirect to account/login
            app.Use(next => async context =>
            {
                if (context.Request.Path == "/Account/Login")
                {
                    context.Response.StatusCode = 401;
                    return;
                }

                await next.Invoke(context);
            });

            app.UseIISPlatformHandler(options => options.AuthenticationDescriptions.Clear());
            app.UseStaticFiles();
            app.UseIdentity();



            _tokenConfig.App(app);

            IdentityConfig(app).Wait();
            RouterConfig(app);


        }

        private static async Task IdentityConfig(IApplicationBuilder app)
        {
            var userManager = app.ApplicationServices.GetService<UserManager<User>>();
            var user = await userManager.FindByEmailAsync("danieloprado@outlook.com");

            if (user == null)
            {
                user = User.Create("Daniel", "Prado", "danieloprado@outlook.com");
                await userManager.CreateAsync(user, "Ng)snuV5Gu)/d7Xe");
            }


            await CreateRoles(app);
            await userManager.AddToRolesAsync(user, new[] { RoleList.Administrator });
        }

        private static async Task CreateRoles(IApplicationBuilder app)
        {
            var roleManager = app.ApplicationServices.GetService<RoleManager<IdentityRole>>();
            foreach (var role in RoleList.All())
            {
                if (await roleManager.RoleExistsAsync(role))
                {
                    continue;
                }

                await roleManager.CreateAsync(new IdentityRole(role));
            }
        }

        private static void RouterConfig(IApplicationBuilder app)
        {
            app.UseMvc(routes =>
            {
                routes.MapRoute("templates/area", "templates/{area}/{path}/{url}", new { controller = "Resource", action = "Templates" });
                routes.MapRoute("templates/path", "templates/{path}/{url}", new { controller = "Resource", action = "Templates" });
                routes.MapRoute("templates/url", "templates/{url}", new { controller = "Resource", action = "Templates" });
                routes.MapRoute("default", "{*url}", new { controller = "Resource", action = "Index" });
            });
        }


    }
}

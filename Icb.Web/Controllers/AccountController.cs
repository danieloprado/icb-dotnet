using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Icb.Domain.Entities;
using Microsoft.AspNet.Authorization;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Mvc;
using Microsoft.AspNet.Mvc.Rendering;
using Microsoft.Data.Entity;
using Microsoft.Extensions.Logging;
using Icb.Web.ViewModels.Account;
using Microsoft.AspNet.Authentication.JwtBearer;
using Icb.Web.Services;
using Icb.Domain.Interfaces.Repositories;
using Icb.CrossCutting;

namespace Icb.Web.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    public class AccountController : Controller
    {
        private readonly UserManager<User> _userManager;
        private readonly TokenService _tokenService;
        private readonly IPersonRepository _personRepository;


        public AccountController(
            UserManager<User> userManager,
            TokenService tokenService,
            IPersonRepository personRepository)
        {
            _userManager = userManager;
            _tokenService = tokenService;
            _personRepository = personRepository;
        }

        [AllowAnonymous]
        [HttpPost("login")]
        public async Task<IActionResult> Login(LoginViewModel model)
        {
            if (!ModelState.IsValid)
            {
                return HttpBadRequest(ModelState);
            }

            var person = await _personRepository.FindByUser(model.Email);
            if (person == null)
            {
                return HttpUnauthorized();
            }

            var checkPassword = await _userManager.CheckPasswordAsync(person.User, model.Password);
            if (!checkPassword)
            {
                return HttpUnauthorized();
            }

            var token = await _tokenService.GerenateToken(person);

            person.User = null;
            Response.Headers.Add("X-Token", token);
            return Ok(new
            {
                Person = person,
                Token = token
            });
        }

        //[HttpPost("testToken")]
        //public async Task<IActionResult> TestToken()
        //{
        //    return Ok(new
        //    {
        //        Id = User.GetUserId(),
        //        username = User.Identity.Name,
        //        roles = User.Identity.Roles(),
        //        giveName = User.Identity.GivenName(),
        //        email = User.Identity.Email(),
        //    });
        //}
    }
}

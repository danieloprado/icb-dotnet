using Icb.Domain.Entities;
using Icb.Domain.Interfaces.Repositories;
using Microsoft.AspNet.Identity;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Security.Principal;
using System.Threading.Tasks;

namespace Icb.Web.Services
{
    public class TokenService
    {
        private readonly UserManager<User> _userManager;
        private readonly TokenAuthOptions _tokenOptions;

        public TokenService(TokenAuthOptions tokenOptions,
            UserManager<User> userManager)
        {
            _tokenOptions = tokenOptions;
            _userManager = userManager;
        }

        public async Task<string> GerenateToken(Person person, DateTime? expires = null)
        {
            var handler = new JwtSecurityTokenHandler();
            var identity = await CreateClaims(person);

            var securityToken = handler.CreateToken(
                issuer: _tokenOptions.Issuer,
                audience: _tokenOptions.Audience,
                signingCredentials: _tokenOptions.SigningCredentials,
                subject: identity,
                expires: expires
            );

            return handler.WriteToken(securityToken);
        }

        private async Task<ClaimsIdentity> CreateClaims(Person person)
        {
            var roles = await _userManager.GetRolesAsync(person.User);

            var claims = new List<Claim>();
            claims.Add(new Claim(ClaimTypes.Name, person.User.UserName));
            claims.Add(new Claim(ClaimTypes.NameIdentifier, person.User.Id));
            claims.Add(new Claim(ClaimTypes.GivenName, person.FirstName));
            claims.Add(new Claim(ClaimTypes.Email, person.Email));

            foreach (var role in roles)
            {
                claims.Add(new Claim(ClaimTypes.Role, role));
            }

            return new ClaimsIdentity(new GenericIdentity(person.User.UserName, "TokenAuth"), claims);
        }
    }
}

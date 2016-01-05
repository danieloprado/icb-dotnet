using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Security.Principal;
using System.Threading.Tasks;

namespace Icb.CrossCutting
{
    public static class ClaimsExtensionMethod
    {
        private static IEnumerable<Claim> GetClaims(IIdentity identity)
        {
            var userIdentity = (ClaimsIdentity)identity;
            return userIdentity.Claims;
        }

        public static string[] Roles(this IIdentity identity)
        {
            return GetClaims(identity).Where(c => c.Type == ClaimTypes.Role)
                                      .Select(x => x.Value)
                                      .ToArray();
        }

        public static string GivenName(this IIdentity identity)
        {
            return GetClaims(identity).Where(c => c.Type == ClaimTypes.GivenName)
                                      .Select(x => x.Value)
                                      .FirstOrDefault();
        }

        public static string Email(this IIdentity identity)
        {
            return GetClaims(identity).Where(c => c.Type == ClaimTypes.Email)
                                      .Select(x => x.Value)
                                      .FirstOrDefault();
        }
    }
}

using Microsoft.AspNet.Authentication.JwtBearer;
using Microsoft.AspNet.Authorization;
using Microsoft.AspNet.Builder;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Newtonsoft.Json;
using System;
using System.IdentityModel.Tokens;
using System.IO;
using System.Security.Cryptography;

namespace Icb.Web
{
    public class TokenConfig
    {
        const string TokenAudience = "IcbApiAudience";
        const string TokenIssuer = "IcbApiIssuer";

        private RsaSecurityKey _key;
        private TokenAuthOptions _tokenOptions;

        public TokenConfig(IConfigurationRoot configuration)
        {
            var keyParams = RSALoader.FromFile(configuration["RSAKeyValue"]);
            _key = new RsaSecurityKey(keyParams);
            _tokenOptions = new TokenAuthOptions()
            {
                Audience = TokenAudience,
                Issuer = TokenIssuer,
                SigningCredentials = new SigningCredentials(_key, SecurityAlgorithms.RsaSha256Signature)
            };
        }

        public void App(IApplicationBuilder app)
        {
            app.UseJwtBearerAuthentication(options =>
            {
                options.TokenValidationParameters.IssuerSigningKey = _key;
                options.TokenValidationParameters.ValidAudience = _tokenOptions.Audience;
                options.TokenValidationParameters.ValidIssuer = _tokenOptions.Issuer;

                options.TokenValidationParameters.ValidateSignature = true;
                options.TokenValidationParameters.ValidateLifetime = true;

                options.TokenValidationParameters.ClockSkew = TimeSpan.FromMinutes(0);
            });
        }

        public void Services(IServiceCollection services, IConfigurationRoot configuration)
        {
            services.AddInstance(_tokenOptions);
            services.AddAuthorization(auth =>
            {
                auth.AddPolicy("Bearer", new AuthorizationPolicyBuilder()
                    .AddAuthenticationSchemes(JwtBearerDefaults.AuthenticationScheme‌​)
                    .RequireAuthenticatedUser().Build());
            });
        }

        private class RSALoader
        {
            public byte[] D { get; set; }
            public byte[] DP { get; set; }
            public byte[] DQ { get; set; }
            public byte[] Exponent { get; set; }
            public byte[] InverseQ { get; set; }
            public byte[] Modulus { get; set; }
            public byte[] P { get; set; }
            public byte[] Q { get; set; }

            public static RSAParameters FromFile(string file)
            {
                if (!File.Exists(file))
                {
                    throw new FileNotFoundException(file);
                }

                var keyParams = JsonConvert.DeserializeObject<RSALoader>(File.ReadAllText(file));
                return new RSAParameters()
                {
                    D = keyParams.D,
                    DP = keyParams.DP,
                    DQ = keyParams.DQ,
                    Exponent = keyParams.Exponent,
                    InverseQ = keyParams.InverseQ,
                    Modulus = keyParams.Modulus,
                    P = keyParams.P,
                    Q = keyParams.Q

                };
            }
        }
    }

    public class TokenAuthOptions
    {
        public string Audience { get; set; }
        public string Issuer { get; set; }
        public SigningCredentials SigningCredentials { get; set; }
    }


}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Icb.Domain.Entities;
using Icb.Domain.Interfaces.Repositories;
using Microsoft.AspNet.Identity;

namespace Icb.Domain.Services
{
    public class PersonService
    {
        private readonly UserManager<User> _userManager;
        private readonly IPersonRepository _personRepository;

        public PersonService(
            UserManager<User> userManager, 
            IPersonRepository personRepository)
        {
            _userManager = userManager;
            _personRepository = personRepository;
        }

        
    }
}

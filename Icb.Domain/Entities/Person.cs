using System;
using Icb.Domain.Interfaces;

namespace Icb.Domain.Entities
{
    public class Person : IEntity
    {
        private Person()
        {

        }

        public int Id { get; set; }

        //NAME
        public string FirstName { get; set; }

        public string LastName { get; set; }

        public string FullName => $"{FirstName} {LastName}";
        
        public string Email { get; set; }

        public DateTime CreatedDate { get; set; }

        public DateTime? DeletedDate { get; set; }

        public bool IsDeleted => DeletedDate.HasValue;

        //FKs
        public User User { get; set; }

        public Address Address { get; set; }


        //FACTORIES
        public static Person Create(string firstName, string lastName)
        {
            return new Person
            {
                FirstName = firstName,
                LastName = lastName,
                CreatedDate = DateTime.Now
            };
        }

    }
}

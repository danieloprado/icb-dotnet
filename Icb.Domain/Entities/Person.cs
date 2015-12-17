using Icb.Domain.Interfaces;
using Icb.Domain.ValueObjects;

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

        //ADDRESS
        public string Address1 { get; set; }

        public string Address2 { get; set; }

        public string City { get; set; }

        public string State { get; set; }

        public string Zipcode { get; set; }

        public double? Longitude { get; set; }

        public double? Latitude { get; set; }

        //PROPS
        public string Email { get; set; }
        

        //FACTORIES
        public static Person Create(string firstName, string lastName)
        {
            return new Person
            {
                FirstName = firstName,
                LastName = lastName
            };
        }

    }
}

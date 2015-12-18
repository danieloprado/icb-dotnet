using Icb.Domain.Interfaces;

namespace Icb.Domain.Entities
{
    public class Address : IEntity
    {
        private Address()
        {

        }

        public int Id { get; set; }

        public string Address1 { get; set; }

        public string Address2 { get; set; }

        public string City { get; set; }

        public string State { get; set; }

        public string Zipcode { get; set; }

        public double? Longitude { get; set; }

        public double? Latitude { get; set; }


        //FACTORY
        public static Address Create(
            string address1,
            string address2,
            string city, string
            state, string zipCode,
            double? latitude = null,
            double? longitude = null)
        {
            return new Address
            {
                Address1 = address1,
                Address2 = address2,
                City = city,
                State = state,
                Zipcode = zipCode,
                Longitude = longitude,
                Latitude = latitude
            };
        }
    }
}

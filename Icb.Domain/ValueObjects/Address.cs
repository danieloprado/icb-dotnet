using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Icb.Domain.ValueObjects
{
    public class Address
    {
        public Address()
        {

        }

        public string Address1 { get; set; }

        public string Address2 { get; set; }

        public string City { get; set; }

        public string State { get; set; }

        public string Zipcode { get; set; }

        public double? Longitude { get; set; }

        public double? Latitude { get; set; }
    }
}

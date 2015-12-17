using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Icb.Domain.ValueObjects
{
    public class Name
    {
        public Name(string firstName, string lastName)
        {
            FirstName = firstName;
            LastName = lastName;
        }

        public string FirstName { get; }

        public string LastName { get; }

        public string FullName => $"{FirstName} {LastName}";

        public static bool operator ==(Name a, Name b)
        {
            return a == null && b == null || (a != null && b != null && a.FullName == b.FullName);
        }

        public static bool operator !=(Name a, Name b)
        {
            return a != null && (b == null || a.FullName != b.FullName);
        }
    }
}

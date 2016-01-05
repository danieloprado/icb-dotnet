using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Reflection;

namespace Icb.CrossCutting
{
    public static class RoleList
    {
        public const string Administrator = "administrator";

        public static IEnumerable<string> All()
        {
            var properties = typeof(RoleList).GetFields();
            return properties.Select(prop => prop.GetValue(null).ToString()).ToList();
        }
    }
}

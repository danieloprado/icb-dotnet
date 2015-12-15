using Icb.Domain.Interfaces;

namespace Icb.Domain.Entities
{
    public class Person : IEntity
    {
        private Person()
        {

        }

        public string Id { get; set; }

        public string Name { get; set; }

        public static Person Create(string name)
        {
            return new Person
            {
                Name = name
            };
        }

    }
}

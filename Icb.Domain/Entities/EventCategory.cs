using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Icb.Domain.Interfaces;

namespace Icb.Domain.Entities
{
    public class EventCategory : IEntity
    {
        private EventCategory()
        {

        }

        public int Id { get; set; }

        public string Name { get; set; }

        public bool IsDeleted { get; set; }

        //FK
        public List<Event> Events { get; set; }

        //FACTORY
        public static EventCategory Create(string name)
        {
            return new EventCategory
            {
                Name = name
            };
        }


    }
}

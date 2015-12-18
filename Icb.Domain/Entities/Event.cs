using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Icb.Domain.Interfaces;

namespace Icb.Domain.Entities
{
    public class Event : IEntity
    {
        private Event()
        {
            
        }

        public int Id { get; set; }

        public string Title { get; set; }

        public string Description { get; set; }

        public DateTime Date { get; set; }

        //FK
        public EventCategory Category { get; set; }

        //FACTORY
        public static Event Create(string title, string description, DateTime date, EventCategory category)
        {
            return new Event
            {
                Title = title,
                Description = description,
                Date = date,
                Category = category
            };
        }
    }
}

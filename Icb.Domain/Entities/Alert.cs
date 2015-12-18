using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Icb.Domain.Interfaces;

namespace Icb.Domain.Entities
{
    public class Alert : IEntity
    {
        private Alert()
        {

        }

        public enum enType : byte
        {
            Info = 0,
            Warning = 1,
            Danger = 2
        }

        public int Id { get; set; }

        public string Title { get; set; }

        public enType Type { get; set; }

        public string Description { get; set; }

        public DateTime? EndDate { get; set; }

        //FACTORY
        public static Alert Create(string title, enType type, string description, DateTime? EndDate = null)
        {
            return new Alert
            {
                Title = title,
                Type = type,
                Description = description,
                EndDate = EndDate
            };
        }
    }
}

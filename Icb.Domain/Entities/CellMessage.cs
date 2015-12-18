using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Icb.Domain.Interfaces;

namespace Icb.Domain.Entities
{
    public class CellMessage : IEntity
    {
        private CellMessage()
        {

        }

        public int Id { get; set; }

        public string Title { get; set; }

        public string Message { get; set; }

        public DateTime CreateDate { get; set; }

        //FACTORY
        public static CellMessage Create(string title, string message)
        {
            return new CellMessage
            {
                Title = title,
                Message = message,
                CreateDate = DateTime.Now
            };
        }

    }
}

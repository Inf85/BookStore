using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Entity;
using System.ComponentModel.DataAnnotations;

namespace BookStore.Models
{
    public class Author
    {
        public int Id { get; set; }
        
        [Required]
        public string Name { get; set; }

        //public ICollection<Book> Books { get; set; }
    }
}
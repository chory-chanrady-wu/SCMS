using System.ComponentModel.DataAnnotations;

namespace SmartCampusAPI.Models
{
    public class RoomBooking
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string RoomNumber { get; set; }

        [Required]
        public DateTime BookingDate { get; set; }

        [Required]
        public TimeSpan StartTime { get; set; }

        [Required]
        public TimeSpan EndTime { get; set; }

        public string? Purpose { get; set; }

        public string? BookedBy { get; set; } // username or userId (string for simplicity)
    }
}

using System.ComponentModel.DataAnnotations;

namespace SmartCampusAPI.Models
{
    namespace SmartCampusAPI.Models
{
    public class RoomBooking
    {
        public int Id { get; set; }
        public string RoomNumber { get; set; } = string.Empty;
        public string Purpose { get; set; } = string.Empty;
        public DateTime StartTime { get; set; }
        public DateTime EndTime { get; set; }
        public string BookedBy { get; set; } = string.Empty;
    }
}
    public class RoomBooking
    {
        public int Id { get; set; }
        public string RoomNumber { get; set; } = string.Empty;
        public string Purpose { get; set; } = string.Empty;
        public DateTime StartTime { get; set; }
        public DateTime EndTime { get; set; }
        public string BookedBy { get; set; } = string.Empty;
    }
}

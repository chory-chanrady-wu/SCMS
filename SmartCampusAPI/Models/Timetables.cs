public class Timetable
{
    public int Id { get; set; }
    public string Course { get; set; } = string.Empty;
    public string Day { get; set; } = string.Empty;
    public string TimeSlot { get; set; } = string.Empty;
    public string Room { get; set; } = string.Empty;
}
public class TimetableRequest
{
    public string Course { get; set; } = string.Empty;
    public string Day { get; set; } = string.Empty;
    public string TimeSlot { get; set; } = string.Empty;
    public string Room { get; set; } = string.Empty;
}
public class Attendance
{
    public int Id { get; set; }
    public int StudentId { get; set; }
    public DateTime Date { get; set; }
    public string Status { get; set; } = "Present"; // or Absent

    public Student Student { get; set; } = null!;
}
public class AttendanceRequest
{
    public int StudentId { get; set; }
    public DateTime Date { get; set; }
    public string Status { get; set; } = "Present"; // or Absent
}

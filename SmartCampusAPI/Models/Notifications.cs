public class Notification
{
    public int Id { get; set; }
    public string Message { get; set; } = string.Empty;
    public string TargetRole { get; set; } = "student"; // or "faculty", "admin", "all"
    public DateTime Timestamp { get; set; } = DateTime.UtcNow;
}
public class NotificationRequest
{
    public string Message { get; set; } = string.Empty;
    public string TargetRole { get; set; } = "student"; // or "faculty", "admin", "all"
}
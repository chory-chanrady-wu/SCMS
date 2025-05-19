public class ExamResult
{
    public int Id { get; set; }
    public int StudentId { get; set; }
    public string Subject { get; set; } = string.Empty;
    public string Grade { get; set; } = string.Empty;

    public Student Student { get; set; } = null!;
}
public class ExamResultRequest
{
    public int StudentId { get; set; }
    public string Subject { get; set; } = string.Empty;
    public string Grade { get; set; } = string.Empty;
}
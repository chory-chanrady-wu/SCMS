public class Student
{
    public int Id { get; set; }
    public int UserId { get; set; }
    public string EnrollmentNumber { get; set; } = string.Empty;
    public string Course { get; set; } = string.Empty;
    public int Year { get; set; }

    public User User { get; set; } = null!;
}

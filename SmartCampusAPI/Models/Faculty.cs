public class Faculty
{
    public int Id { get; set; }
    public int UserId { get; set; }
    public string Department { get; set; } = string.Empty;

    public User User { get; set; } = null!;
}

namespace SmartCampusAPI.Models
{
    public class LoginRequest
    {
        public string Username { get; set; } = string.Empty;
        public string PasswordHash { get; set; } = string.Empty;
    }
}

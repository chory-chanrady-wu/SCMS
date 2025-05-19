using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using SmartCampusAPI.Models;

[Authorize]
[ApiController]
[Route("[controller]")]
public class UserController : ControllerBase
{
    // Replace this with your actual user data source, e.g., a database context or repository
    private static readonly List<User> Users = new List<User>
    {
        new User { Id = 1, Username = "testuser", Role = "Admin" }
        // Add more users as needed
    };

    [HttpGet("me")]
    public IActionResult GetProfile()
    {
        var username = User.Identity?.Name;
        var claimValue = User.FindFirst("YourClaimType")?.Value;
        // Replace "YourClaimType" with the actual claim type you are using
        if (string.IsNullOrEmpty(username))
            return Unauthorized("User not authenticated");  
    
        var user = Users.FirstOrDefault(u => u.Username == username);

        if (user == null)
            return NotFound("User not found");

        return Ok(new
        {
            user.Id,
            user.Username,
            user.Role
            // Optionally exclude sensitive fields like PasswordHash
        });
    }
}

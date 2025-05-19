using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using SmartCampusAPI.Models;

[Authorize]
[ApiController]
[Route("[controller]")]
public class UserController : ControllerBase
{
    [HttpGet("me")]
    public IActionResult GetProfile()
    {
        var username = User.Identity?.Name;
        var user = User.FirstOrDefault(u => u.Username == username);
        
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

using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using SmartCampusAPI.Data;
using SmartCampusAPI.Models;

namespace SmartCampusAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    [Authorize(Roles = "admin")] // Only admin can access this controller
    public class RoleController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public RoleController(ApplicationDbContext context)
        {
            _context = context;
        }

        // 🔍 GET: All users with "pending" role
        [HttpGet("pending")]
        public IActionResult GetPendingUsers()
        {
            var pendingUsers = _context.Users
                .Where(u => u.Role == "pending")
                .Select(u => new { u.Id, u.Username, u.Role })
                .ToList();

            return Ok(pendingUsers);
        }

        // ✅ POST: Assign role to user
        [HttpPost("assign")]
        public IActionResult AssignRole([FromBody] RoleAssignmentRequest request)
        {
            var user = _context.Users.FirstOrDefault(u => u.Id == request.UserId);
            if (user == null)
                return NotFound("User not found.");

            user.Role = request.Role;
            _context.SaveChanges();

            return Ok(new { message = $"Role '{request.Role}' assigned to {user.Username}." });
        }
    }

    // DTO for role assignment
    public class RoleAssignmentRequest
    {
        public int UserId { get; set; }
        public string Role { get; set; } = "student";
    }
}

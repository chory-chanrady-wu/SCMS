
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace SmartCampusAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    [Authorize(Roles = "faculty")]
    public class FacultyController : ControllerBase
    {
        [HttpGet]
        public IActionResult GetFacultyContent()
        {
            return Ok("Welcome, faculty member!");
        }
    }
}

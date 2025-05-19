
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace SmartCampusAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    [Authorize(Roles = "admin")]
    public class AdminController : ControllerBase
    {
        [HttpGet]
        public IActionResult GetAdminContent()
        {
            return Ok("Welcome, admin!");
        }
    }
}

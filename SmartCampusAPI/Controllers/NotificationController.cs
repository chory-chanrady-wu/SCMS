using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using SmartCampusAPI.Data;
using SmartCampusAPI.Hubs;
using SmartCampusAPI.Models;

[ApiController]
[Route("api/[controller]")]
[Authorize(Roles = "Admin")]
public class NotificationController : ControllerBase
{
    private readonly ApplicationDbContext _context;
    private readonly IHubContext<NotificationHub> _hub;

    public NotificationController(ApplicationDbContext context, IHubContext<NotificationHub> hub)
    {
        _context = context;
        _hub = hub;
    }

    [HttpPost("send")]
    public async Task<IActionResult> SendNotification([FromBody] Notification notification)
    {
        _context.Notifications.Add(notification);
        await _context.SaveChangesAsync();

        // Broadcast to all clients
        await _hub.Clients.All.SendAsync("ReceiveNotification", notification);

        return Ok(notification);
    }

    [HttpGet]
    public IActionResult GetNotifications()
    {
        return Ok(_context.Notifications.OrderByDescending(n => n.CreatedAt).ToList());
    }
}

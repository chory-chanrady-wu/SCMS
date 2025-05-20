using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using SmartCampusAPI.Hubs;

[ApiController]
[Route("api/[controller]")]
public class PushNotificationController(IHubContext<NotificationHub> hubContext) : ControllerBase
{
    private readonly IHubContext<NotificationHub> _hubContext = hubContext;

    [HttpPost("send")]
    public async Task<IActionResult> SendNotification([FromBody] string message)
    {
        await _hubContext.Clients.All.SendAsync("ReceiveNotification", message);
        return Ok(new { status = "Sent", message });
    }
}

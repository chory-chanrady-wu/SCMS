using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SmartCampusAPI.Data;
using SmartCampusAPI.Models;

namespace SmartCampusAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class RoomBookingController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public RoomBookingController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll() =>
            Ok(await _context.RoomBookings.ToListAsync());

        [HttpPost]
        public async Task<IActionResult> Create(RoomBooking booking)
        {
            _context.RoomBookings.Add(booking);
            await _context.SaveChangesAsync();
            return Ok(booking);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Update(int id, RoomBooking booking)
        {
            var existing = await _context.RoomBookings.FindAsync(id);
            if (existing == null) return NotFound();

            existing.RoomNumber = booking.RoomNumber;
            existing.Purpose = booking.Purpose;
            existing.StartTime = booking.StartTime;
            existing.EndTime = booking.EndTime;
            existing.BookedBy = booking.BookedBy;

            await _context.SaveChangesAsync();
            return Ok(existing);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var booking = await _context.RoomBookings.FindAsync(id);
            if (booking == null) return NotFound();

            _context.RoomBookings.Remove(booking);
            await _context.SaveChangesAsync();
            return Ok();
        }
    }
}

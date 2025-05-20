using Microsoft.EntityFrameworkCore;
using SmartCampusAPI.Models;

namespace SmartCampusAPI.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }

        public DbSet<User> Users { get; set; }
        public DbSet<Student> Students { get; set; }
        public DbSet<Faculty> Faculty { get; set; }
        public DbSet<Attendance> Attendance { get; set; }
        public DbSet<ExamResult> ExamResults { get; set; }
        public DbSet<Notification> Notifications { get; set; }
        public DbSet<Timetable> Timetables { get; set; }
        public DbSet<RoomBooking> RoomBookings { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<User>()
                .HasIndex(u => u.Username)
                .IsUnique();

            modelBuilder.Entity<Student>()
                .HasOne(s => s.User)
                .WithMany()
                .HasForeignKey(s => s.UserId)
                .OnDelete(DeleteBehavior.Cascade);

        }
    }

    internal class BCrypt
    {
    }

}
// Compare this snippet from SmartCampusAPI/Models/Notification.cs:
// public class Notification
// {
//     public int Id { get; set; }
//     public string Title { get; set; } = string.Empty;
//     public string Message { get; set; } = string.Empty;  
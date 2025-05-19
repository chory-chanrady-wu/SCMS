using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SmartCampusAPI.Migrations
{
    /// <inheritdoc />
    public partial class chorychanrady : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.InsertData(
                table: "Users",
                columns: new[] { "Id", "Email", "PasswordHash", "RefreshToken", "RefreshTokenExpiry", "Role", "Username" },
                values: new object[] { 2, "", "Chandy@11032002", null, null, "Faculty", "chory.chanrady" });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.InsertData(
                table: "Users",
                columns: new[] { "Id", "Email", "PasswordHash", "RefreshToken", "RefreshTokenExpiry", "Role", "Username" },
                values: new object[] { 1, "", "admin", null, null, "admin", "admin" });
        }
    }
}

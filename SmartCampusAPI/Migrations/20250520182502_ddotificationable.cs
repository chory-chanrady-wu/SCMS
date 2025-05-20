using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SmartCampusAPI.Migrations
{
    /// <inheritdoc />
    public partial class ddotificationable : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.RenameColumn(
                name: "Timestamp",
                table: "Notifications",
                newName: "CreatedAt");

            migrationBuilder.RenameColumn(
                name: "TargetRole",
                table: "Notifications",
                newName: "Title");

            migrationBuilder.AddColumn<int>(
                name: "NotificationId",
                table: "Notifications",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Notifications_NotificationId",
                table: "Notifications",
                column: "NotificationId");

            migrationBuilder.AddForeignKey(
                name: "FK_Notifications_Notifications_NotificationId",
                table: "Notifications",
                column: "NotificationId",
                principalTable: "Notifications",
                principalColumn: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Notifications_Notifications_NotificationId",
                table: "Notifications");

            migrationBuilder.DropIndex(
                name: "IX_Notifications_NotificationId",
                table: "Notifications");

            migrationBuilder.DropColumn(
                name: "NotificationId",
                table: "Notifications");

            migrationBuilder.RenameColumn(
                name: "Title",
                table: "Notifications",
                newName: "TargetRole");

            migrationBuilder.RenameColumn(
                name: "CreatedAt",
                table: "Notifications",
                newName: "Timestamp");

            migrationBuilder.InsertData(
                table: "Users",
                columns: new[] { "Id", "Email", "PasswordHash", "RefreshToken", "RefreshTokenExpiry", "Role", "Username" },
                values: new object[] { 2, "", "$2a$11$F3moFndjNGC5bsV6oDQVD.Xh8a0vxCCrUVdAfoek9RmdYcVMob1qi", null, null, "Faculty", "chory.chanrady" });
        }
    }
}

using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SmartCampusAPI.Migrations
{
    /// <inheritdoc />
    public partial class UpdateHashedFacultyUser : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 2,
                column: "PasswordHash",
                value: "$2a$11$F3moFndjNGC5bsV6oDQVD.Xh8a0vxCCrUVdAfoek9RmdYcVMob1qi");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 2,
                column: "PasswordHash",
                value: "Chandy@11032002");
        }
    }
}

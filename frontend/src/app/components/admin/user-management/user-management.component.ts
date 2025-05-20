import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-user-management',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {
  users: any[] = [];
  newUser = { username: '', password: '', role: '' };

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers() {
    this.userService.getAll().subscribe(data => this.users = data);
  }

  createUser() {
    this.userService.create(this.newUser).subscribe(() => {
      this.loadUsers();
      this.newUser = { username: '', password: '', role: '' };
    });
  }

  updateUser(user: any) {
    this.userService.update(user.id, { ...user }).subscribe();
  }

  deleteUser(id: number) {
    this.userService.delete(id).subscribe(() => this.loadUsers());
  }
}
import { Component } from '@angular/core';
import { UserManagementComponent } from './user-management/user-management.component';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [UserManagementComponent], // ✅ Add this
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent { }

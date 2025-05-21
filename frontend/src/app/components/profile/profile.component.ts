import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  standalone: true,
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  imports: [CommonModule] // ✅ So *ngIf works
})
export class ProfileComponent implements OnInit {
changePassword() {
throw new Error('Method not implemented.');
}
editProfile() {
throw new Error('Method not implemented.');
}
  user: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('http://localhost:5086/api/user/me').subscribe({
      next: (res) => this.user = res,
      error: (err) => console.error(err)
    });
  }
}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-login',
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username = '';
  password = '';
  errorMessage = '';
  successMessage = ''; // ✅ ADD THIS

  constructor(private router: Router) {}

  login() {
    if (this.username === 'admin' && this.password === 'admin') {
      localStorage.setItem('token', 'admin-token'); // ✅ add this
      localStorage.setItem('user', this.username);
      localStorage.setItem('role', 'admin');
      this.successMessage = 'Welcome admin!';
      this.router.navigate(['/admin']);
    } else if (this.username && this.password) {
      localStorage.setItem('token', 'user-token'); // ✅ add this
      localStorage.setItem('user', this.username);
      localStorage.setItem('role', 'pending');
      this.successMessage = 'Login successful. Awaiting role assignment.';
      this.router.navigate(['/home']);
    } else {
      this.errorMessage = 'Invalid credentials';
    }
  }
  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.removeItem('role');
    this.router.navigate(['/login']);
  }

  clearMessages() {
    this.errorMessage = '';
    this.successMessage = ''; // ✅ ADD THIS
  }
}

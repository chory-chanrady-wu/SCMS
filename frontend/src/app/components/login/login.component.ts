import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [CommonModule, FormsModule], // ✅ This is what was missing
  // providers: [AuthService], // Remove this line if AuthService is already providedIn: 'root'
})
export class LoginComponent {
  username = '';
  password = '';
  errorMessage = '';
  successMessage = '';

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.authService.login(this.username, this.password).subscribe({
      next: (res: { role: any; }) => {
        this.successMessage = 'Login successful';
        const role = res.role;
        if (role === 'admin') this.router.navigate(['/admin']);
        else if (role === 'student') this.router.navigate(['/student']);
        else if (role === 'faculty') this.router.navigate(['/faculty']);
        else this.router.navigate(['/home']);
      },
      error: () => {
        this.errorMessage = 'Invalid credentials';
      }
    });
  }

  clearMessages() {
    this.errorMessage = '';
    this.successMessage = '';
  }
}

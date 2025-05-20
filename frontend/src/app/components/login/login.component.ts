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
  imports: [CommonModule, FormsModule]
})
export class LoginComponent {
  username = '';
  password = '';
  errorMessage = '';
  successMessage = '';

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.clearMessages();

    this.authService.login(this.username, this.password).subscribe({
      next: (res) => {
        this.successMessage = 'Login successful';
        this.router.navigate(['/home']); // ✅ Redirect all users to home
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

import { Component } from '@angular/core';
import { Router } from '@angular/router'; // ✅ Import Router

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  username = '';
  password = '';
  errorMessage = '';

  constructor(private router: Router) {}

  login() {
    // Dummy example: Replace this with real auth logic
    if (this.username === 'admin' && this.password === 'admin') {
      // For now, still redirect admin to home
      this.router.navigate(['/home']);
    } else if (this.username && this.password) {
      // Login success for any user
      this.router.navigate(['/home']); // ✅ Redirect to /home
    } else {
      this.errorMessage = 'Invalid username or password';
    }
  }
}

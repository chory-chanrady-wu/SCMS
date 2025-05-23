import { Component, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet, NavigationEnd } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
notifications: any;
  constructor(private router: Router, private cdr: ChangeDetectorRef) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.cdr.detectChanges(); // 🔄 force re-checks for *ngIf
      }
    });
  }

  getRole(): string {
    return (localStorage.getItem('role') || '').toLowerCase();
  }


  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  isLoginPage(): boolean {
    return this.router.url === '/login';
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }
  isAdmin(): boolean {
    return this.getRole() === 'admin';
  }

  ngOnInit(): void {
    this.notifications.startConnection();
    this.notifications.onNotification((msg: string) => {
      alert('🔔 New Notification: ' + msg);
    });
  }
}


import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-notification',
  template: `
    <div *ngIf="message" class="notification-popup">
      🔔 {{ message }}
    </div>
  `,
  styles: [`
    .notification-popup {
      position: fixed;
      top: 60px;
      right: 20px;
      background: #fff;
      color: #000;
      padding: 10px 20px;
      border-radius: 8px;
      box-shadow: 0 4px 8px rgba(0,0,0,0.2);
      z-index: 9999;
      animation: slideIn 0.3s ease;
    }

    @keyframes slideIn {
      from { opacity: 0; transform: translateY(-10px); }
      to { opacity: 1; transform: translateY(0); }
    }
  `]
})
export class NotificationComponent implements OnInit {
  message: string | null = null;

  constructor(private notificationService: NotificationService) {}

  ngOnInit() {
    this.notificationService.notification$.subscribe(msg => {
      this.message = msg;
      if (msg) {
        setTimeout(() => this.message = null, 5000); // Hide after 5 seconds
      }
    });
  }
}

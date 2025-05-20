import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: []
})
export class HomeComponent {
  getRole(): string {
    return localStorage.getItem('role') || 'Unknown';
  }
}

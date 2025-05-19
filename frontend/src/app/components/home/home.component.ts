import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [CommonModule]
})
export class HomeComponent implements OnInit {
  userRole: string | null = null;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.checkRole();

    // Optional: re-check every 5 seconds
    setInterval(() => this.checkRole(), 5000);
  }
  manualRefresh(): void {
  this.checkRole();
  }

  checkRole(): void {
    const role = localStorage.getItem('role');

    if (!role || role === 'pending') {
      this.userRole = 'pending';
    } else {
      this.router.navigate([`/${role}`]);
    }
  }
}

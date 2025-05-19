import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  imports: [],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  [x: string]: any;
  logout() {
    localStorage.clear();
    window.location.href = '/login';
  }

}

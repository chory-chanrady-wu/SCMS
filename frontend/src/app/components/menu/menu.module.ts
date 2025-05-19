import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  role = localStorage.getItem('role');
}
// This component is responsible for displaying the menu based on the user's role.
// It uses Angular's RouterModule to handle navigation.
import { Component } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';


@Component({
  selector: 'app-header-component',
  imports: [MatMenuModule],
  templateUrl: './header-component.html',
  styleUrl: './header-component.css',
})
// Hamburger logic 
export class HeaderComponent {
  menuOpen = false; // starts hidden 

  toggleMenu() {
    // listen for state and throw out opposite value
    this.menuOpen = !this.menuOpen;
  }
}



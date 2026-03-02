import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatMenuModule} from '@angular/material/menu';
import { FontAwesomeModule} from '@fortawesome/angular-fontawesome';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatMenuModule, FontAwesomeModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  protected readonly title = signal('Parking');
  
}

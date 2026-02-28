import { Component } from '@angular/core';
import { MatMenuModule} from '@angular/material/menu';


@Component({
  selector: 'app-header-component',
  imports: [ MatMenuModule ],
  templateUrl: './header-component.html',
  styleUrl: './header-component.css',
})
export class HeaderComponent {

}



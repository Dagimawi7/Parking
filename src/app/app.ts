import { Component, signal, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';






@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  protected readonly title = signal('Parking');

  isMobile = false;

  constructor(private BreakpointObserver: BreakpointObserver) {}

    ngOnInit() {
      this.BreakpointObserver
        .observe([Breakpoints.Handset])
        .subscribe(result => {
          console.log('Breakpoint result:', result);
          this.isMobile = result.matches;
        });
    }
  }
  


import { Component } from '@angular/core';
import { HeaderComponent } from '../component/header-component/header-component';
import { FooterComponent } from '../component/footer-component/footer-component';
import { MainComponent } from '../component/main-component/main-component';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-home-component',
  imports: [HeaderComponent, FooterComponent, MainComponent],
  templateUrl: './home-component.html',
  styleUrl: './home-component.css',
})
export class HomeComponent {

}

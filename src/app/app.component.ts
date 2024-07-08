import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Headercomponent } from './header/header.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,Headercomponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'E-cart';
}

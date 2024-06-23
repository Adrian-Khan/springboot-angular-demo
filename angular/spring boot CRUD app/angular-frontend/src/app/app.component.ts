import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [RouterLink, RouterLinkActive, RouterOutlet, CommonModule],
  standalone: true
})
export class AppComponent {
  title = 'Angular - Spring Boot Full Stack App';
  constructor(private router: Router) {}
}

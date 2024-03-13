import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'dashboard-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}

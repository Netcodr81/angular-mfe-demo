import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavigationService } from '../services/navigation.service';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'host-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  activeRouteService = inject(NavigationService)


}

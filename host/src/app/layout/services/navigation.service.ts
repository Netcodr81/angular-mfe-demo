import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Injectable({providedIn: 'root'})
export class NavigationService {
currentRoute?: string;

  constructor(private router: Router) {
     this.router.events
      .pipe(
        filter((event): event is NavigationEnd => event instanceof NavigationEnd)
      )
      .subscribe((event: NavigationEnd) => {
        console.log(event.url);
        this.currentRoute = event.url;
      });
  }

  isActiveRoute(route: string): boolean {
    return this.currentRoute === route;
  }



}

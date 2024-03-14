import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../home/home.component';

@Component({
  standalone: true,
  imports: [CommonModule, HomeComponent],
  selector: 'angular-mfe-demo-admin-entry', // eslint-disable-line @angular-eslint/component-selector
  template: `<admin-home></admin-home>`,
})
export class RemoteEntryComponent {}

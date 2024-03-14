import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../home/home.component';

@Component({
  standalone: true,
  imports: [CommonModule, HomeComponent],
  selector: 'angular-mfe-demo-todo-entry', // eslint-disable-line @angular-eslint/component-selector
  template: `<todo-home></todo-home>`,
})
export class RemoteEntryComponent {}

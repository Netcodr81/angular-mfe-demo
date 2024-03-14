import { PrimeNGConfig } from 'primeng/api';
import { Component, OnInit } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FooterComponent } from "./layout/footer/footer.component";
import { HeaderComponent } from "./layout/header/header.component";


@Component({
  standalone: true,
  imports: [RouterModule, FooterComponent, HeaderComponent],
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'host-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit{
  constructor(private primengConfig: PrimeNGConfig){

  }
  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }
}

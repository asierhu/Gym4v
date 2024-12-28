import { Component } from '@angular/core';
import { CarrouselCardComponent } from "../carrousel-card/carrousel-card.component";

@Component({
  selector: 'app-carrousel',
  imports: [CarrouselCardComponent],
  templateUrl: './carrousel.component.html',
  styleUrl: './carrousel.component.scss'
})
export class CarrouselComponent {

}

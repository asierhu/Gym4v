import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-carrousel-card',
  imports: [],
  templateUrl: './carrousel-card.component.html',
  styleUrl: './carrousel-card.component.scss'
})
export class CarrouselCardComponent {
  @Input() name!: string;
  @Input() email!: string;
  @Input() tel!: string;
}

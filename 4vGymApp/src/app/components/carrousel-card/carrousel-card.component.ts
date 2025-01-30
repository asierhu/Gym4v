import { Component, Input } from '@angular/core';
import { BotonBorrarComponent } from "../boton-borrar/boton-borrar.component";
import { MonitorService } from '../../services/monitor.service';
import { BotonPopupComponent } from "../boton-popup/boton-popup.component";

@Component({
  selector: 'app-carrousel-card',
  imports: [BotonBorrarComponent, BotonPopupComponent],
  templateUrl: './carrousel-card.component.html',
  styleUrl: './carrousel-card.component.scss'
})
export class CarrouselCardComponent {
  @Input() name!: string;
  @Input() email!: string;
  @Input() tel!: string;
  @Input() id: number=-1;
  @Input() service!: MonitorService;
  anyadir=false;
  constructor() {
    console.log("Carrousel card "+ this.anyadir);
  }
  
}

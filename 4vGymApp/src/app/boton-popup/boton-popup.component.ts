import { Component, EventEmitter, Output } from '@angular/core';
import { MonitorPopUpComponent } from "../components/monitor-pop-up/monitor-pop-up.component";
import { Monitor } from '../models/monitor';

@Component({
  selector: 'app-boton-popup',
  imports: [MonitorPopUpComponent],
  templateUrl: './boton-popup.component.html',
  styleUrl: './boton-popup.component.scss'
})
export class BotonPopupComponent {
  @Output() monitorAdded = new EventEmitter<Monitor>();
  onMonitorAdded($event: Monitor) {
    this.monitorAdded.emit($event);
  }
  openModal() {
    console.log('Modal abierto');
    const modal = document.getElementById('exampleModal');
    modal?.showPopover;
  }

}

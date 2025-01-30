import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MonitorPopUpComponent } from "../monitor-pop-up/monitor-pop-up.component";
import { Monitor } from '../../models/monitor';
import { MonitorService } from '../../services/monitor.service';
import { CommonModule } from '@angular/common';
import { EditarPopupComponent } from "../editar-popup/editar-popup.component";

@Component({
  selector: 'app-boton-popup',
  imports: [CommonModule, MonitorPopUpComponent, EditarPopupComponent],
  templateUrl: './boton-popup.component.html',
  styleUrl: './boton-popup.component.scss'
})
export class BotonPopupComponent {

  @Output() monitorAdded = new EventEmitter<Monitor>();
  @Input() name!: string;
  @Input() email!: string;
  @Input() tel!: string;
  @Input() id: number=-1;
  @Input() service!: MonitorService;
  @Input() anyadir: boolean=true;

  
  onMonitorAdded($event: Monitor) {
    this.monitorAdded.emit($event);
  }
  openModal() {
    console.log('Modal abierto');
    const modal = document.getElementById('exampleModal');
    modal?.showPopover;
  }
}

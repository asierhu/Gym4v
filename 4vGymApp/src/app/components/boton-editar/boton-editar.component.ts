import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Monitor } from '../../models/monitor';
import { MonitorService } from '../../services/monitor.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-boton-editar',
  imports: [CommonModule],
  templateUrl: './boton-editar.component.html',
  styleUrl: './boton-editar.component.scss'
})
export class BotonEditarComponent {
  @Output() monitorEdited = new EventEmitter<number>();
  @Input() id: number=-1;

  openModal() {
    console.log('Modal abierto');
    const modal = document.getElementById('exampleModal');
    modal?.showPopover;
  }
  constructor(){
    this.monitorEdited.emit(this.id);
  }

}

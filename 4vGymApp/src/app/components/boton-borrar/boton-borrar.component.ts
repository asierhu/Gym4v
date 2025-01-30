import { Component, EventEmitter, Input, input } from '@angular/core';
import { MonitorService } from '../../services/monitor.service';

@Component({
  selector: 'app-boton-borrar',
  imports: [],
  templateUrl: './boton-borrar.component.html',
  styleUrl: './boton-borrar.component.scss'
})
export class BotonBorrarComponent {
  borrarMonitor() {
    this.service.deleteMonitor(this.idMonitor);
  }

  @Input() idMonitor: number = -1;
  @Input() service: MonitorService = new MonitorService();
}

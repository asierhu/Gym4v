import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-activity',
  imports: [],
  templateUrl: './activity.component.html',
  styleUrl: './activity.component.scss'
})
export class ActivityComponent {
  @Input() nombreMonitor: string = '';
  @Input() icono: string = '';
  @Input() isFree: boolean = false;

  @Output() eliminarActividad = new EventEmitter<void>();
  @Output() editarActividad = new EventEmitter<void>();

  eliminar() {
    this.eliminarActividad.emit();
  }

  editar() {
    this.editarActividad.emit();
  }
}

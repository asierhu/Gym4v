import { Component, Inject, PLATFORM_ID, Input } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { CommonModule } from '@angular/common';
import { Activity } from '../../models/activity';
import { ActivityService } from '../../services/activity.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-edit-activity-pop-up',
  imports: [CommonModule, FormsModule],
  templateUrl: './edit-activity-pop-up.component.html',
  styleUrl: './edit-activity-pop-up.component.scss'
})
export class EditActivityPopUpComponent {
  isBrowser: boolean;

  @Input() actividad: Activity = {
    id: 0,
    fechaInicio: '',
    fechaFinal: '',
    date: new Date(),
    monitor: [],
    type: '',
    isAvailable: false
  };

  tiposActividades = ['Yoga', 'Crossfit', 'Pilates', 'Zumba', 'BodyPump', 'Spinning'];
  monitoresDisponibles = ['Miguel Goyena', 'Lucía Rodriguez', 'Juan Pérez'];

  constructor(
    @Inject(PLATFORM_ID) private platformId: object,
    private activityService: ActivityService
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  // Método para establecer el horario según el botón presionado
  establecerHorario(horaInicio: string, horaFin: string) {
    this.actividad.fechaInicio = horaInicio;
    this.actividad.fechaFinal = horaFin;
  }

  // Ajustar monitores según la actividad
  actualizarMonitores() {
    if (this.actividad.type.toLowerCase() === 'bodypump') {
      this.actividad.monitor = new Array(2).fill('');
    } else if (this.actividad.type.toLowerCase() === 'spinning') {
      this.actividad.monitor = new Array(1).fill('');
    } else if (this.actividad.type.toLowerCase() === 'pilates') {
      this.actividad.monitor = new Array(1).fill('');
    } else if (this.actividad.type.toLowerCase() === 'zumba') {
      this.actividad.monitor = new Array(1).fill('');
    } else {
      this.actividad.monitor = new Array(2).fill('');
    }
  }

  // Guardar cambios en la actividad
  editarActividad() {
    this.activityService.updateActividad(this.actividad);
    console.log('Actividad editada:', this.actividad);
  }
}

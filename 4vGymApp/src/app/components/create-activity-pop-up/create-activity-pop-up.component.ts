import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Activity } from '../../models/activity';
import { ActivityService } from '../../services/activity.service';

@Component({
  selector: 'app-create-activity-pop-up',
  imports: [CommonModule, FormsModule],
  templateUrl: './create-activity-pop-up.component.html',
  styleUrl: './create-activity-pop-up.component.scss'
})
export class CreateActivityPopUpComponent {
  isBrowser: boolean;
  anyadir: boolean = true; 
  
  constructor(
    @Inject(PLATFORM_ID) private platformId: object,
    private activityService: ActivityService
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  nuevaActividad: Activity = {
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

  // Método para establecer el horario según el botón presionado
  establecerHorario(horaInicio: string, horaFin: string) {
    this.nuevaActividad.fechaInicio = horaInicio;
    this.nuevaActividad.fechaFinal = horaFin;
  }

  // Ajustar monitores según la actividad
  actualizarMonitores() {
    if (this.nuevaActividad.type.toLowerCase() === 'bodypump') {
      this.nuevaActividad.monitor = new Array(2).fill('');
    } else if (this.nuevaActividad.type.toLowerCase() === 'spinning') {
      this.nuevaActividad.monitor = new Array(1).fill('');
    } else if (this.nuevaActividad.type.toLowerCase() === 'pilates') {
      this.nuevaActividad.monitor = new Array(1).fill('');
    } else if (this.nuevaActividad.type.toLowerCase() === 'zumba') {
      this.nuevaActividad.monitor = new Array(1).fill('');
    } else {
      this.nuevaActividad.monitor = new Array(2).fill('');
    }
  }

  // Crear la actividad y agregarla al servicio
  crearActividad() {
    this.nuevaActividad.id = Math.floor(Math.random() * 1000);
    this.activityService.addActividad(this.nuevaActividad);
    console.log('Actividad creada:', this.nuevaActividad);

    // Reiniciar el formulario
    this.nuevaActividad = {
      id: 0,
      fechaInicio: '',
      fechaFinal: '',
      date: new Date(),
      monitor: [],
      type: '',
      isAvailable: false
    };
  }
}

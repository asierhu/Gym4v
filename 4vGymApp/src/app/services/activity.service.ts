import { Injectable } from '@angular/core';
import { Activity } from '../models/activity';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {
  updateActividad(actividad: Activity) {
    throw new Error('Method not implemented.');
  }
  private actividades: Activity[] = [
    { 
      id: 1,
      fechaInicio: "10:00",
      fechaFinal: "11:30",
      date: new Date(2025, 0, 30),
      monitor: ["Miguel Goyena"], 
      type: "bodypump",
      isAvailable: false
    },
    { 
      id: 2,
      fechaInicio: "13:30",
      fechaFinal: "15:00",
      date: new Date(2025, 0, 30),
      monitor: [], 
      type: "",
      isAvailable: true
    },
    { 
      id: 3,
      fechaInicio: "17:30",
      fechaFinal: "19:00",
      date: new Date(2025, 0, 30), 
      monitor: ["Miguel Goyena","Lucía Rodriguez"], 
      type: "pilates",
      isAvailable: false
    },
    { 
      id: 4,
      fechaInicio: "17:30",
      fechaFinal: "19:00",
      date: new Date(2025, 1, 0), 
      monitor: [], 
      type: "",
      isAvailable: true
    }
  ];

  // Método para devolver todas las actividades
  getActividades(): Activity[] {
    return this.actividades;
  }

  // Método para agregar una nueva actividad
  addActividad(nuevaActividad: Activity): void {
    this.actividades.push(nuevaActividad);
    console.log('Nueva actividad agregada:', nuevaActividad);
  }
}

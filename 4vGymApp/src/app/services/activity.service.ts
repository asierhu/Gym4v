import { Injectable } from '@angular/core';
import { Activity } from '../models/activity';

@Injectable({
  providedIn: 'root'
})

export class ActivityService {

  private actividades: Activity[] = [
    { 
      id: 1,
      fechaInicio: "10:00",
      fechaFinal: "11:30",
      date: "10/08/2014 00:00", 
      monitor: ["Miguel Goyena"], 
      type: "bodypump"
    },

    { 
      id: 2,
      fechaInicio: "13:30",
      fechaFinal: "15:00",
      date: "12/09/2022 00:00", 
      monitor: [], 
      type: "free"
    },

    { 
      id: 3,
      fechaInicio: "17:30",
      fechaFinal: "19:00",
      date: "12/09/2022 00:00", 
      monitor: ["Miguel Goyena","Lucía Rodriguez"], 
      type: "pilates"
    }
  ];

  // Creamos un método para devolver todas las actividades
  getActividades(): Activity[] {
    return this.actividades;
  }
}

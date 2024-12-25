import { Injectable } from '@angular/core';
import { Activity } from '../models/activity';

@Injectable({
  providedIn: 'root'
})

export class ActivityService {

  private actividades: Activity[] = [
    { 
      horario: "10:00-11:30",
      date: "10/08/2014 00:00", 
      monitor: ["Miguel Goyena"], 
      type: "BodyPump"
    },

    { 
      horario: "13:30-15:00",
      date: "12/09/2022 00:00", 
      monitor: ["Miguel Goyena"], 
      type: "Pilates"
    },

    { 
      horario: "17:30-19:00",
      date: "12/09/2022 00:00", 
      monitor: ["Miguel Goyena","Lucía Rodriguez"], 
      type: "Pilates"
    }
  ];

  // Creamos un método para devolver todas las actividades
  getActividades(): Activity[] {
    return this.actividades;
  }
}

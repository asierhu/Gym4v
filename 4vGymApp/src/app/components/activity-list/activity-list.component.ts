import { Component, Input, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Activity } from '../../models/activity';
import { ActivityService } from '../../services/activity.service';
import { CreateActivityPopUpComponent } from "../create-activity-pop-up/create-activity-pop-up.component";
import { EditActivityPopUpComponent } from "../edit-activity-pop-up/edit-activity-pop-up.component";

@Component({
  selector: 'app-activity-list',
  imports: [CommonModule, CreateActivityPopUpComponent, EditActivityPopUpComponent],
  templateUrl: './activity-list.component.html',
  styleUrl: './activity-list.component.scss'
})
export class ActivityListComponent {

@Input() selectedDate!: Date; // Recibe la fecha del padre


addActivity() {
throw new Error('Method not implemented.');
}
deleteActivity(arg0: number) {
throw new Error('Method not implemented.');
}
editActivity(_t4: Activity) {
throw new Error('Method not implemented.');
}
  actividades: Activity[] = [];

  constructor(private actividadService: ActivityService) {}

  hayActividad: boolean = false;

  ngOnInit(): void {
    this.actividades = this.actividadService.getActividades();

    this.ensureDailyActivities();

  }

  ensureDailyActivities() {
    const activitiesByDay = new Map<number, any[]>();
  
    // Agrupar actividades por día
    this.actividades.forEach(activity => {
      const day = activity.date.getDate();
      if (!activitiesByDay.has(day)) {
        activitiesByDay.set(day, []);
      }
      activitiesByDay.get(day)!.push(activity);
    });
  
    // Asegurar que cada día tenga exactamente 3 actividades con horarios predefinidos
    for (let i = 1; i <= 31; i++) { // Suponiendo un mes de 31 días
      if (!activitiesByDay.has(i)) {
        activitiesByDay.set(i, []);
      }
  
      const dayActivities = activitiesByDay.get(i)!;
  
      while (dayActivities.length < 3) {
        dayActivities.push({
          date: new Date(this.selectedDate.getFullYear(), this.selectedDate.getMonth(), i),
          fechaInicio: '',
          fechaFinal: '',
          monitor: [],
          type: '',
          isAvailable: true
        });
      }
  
      // Asignar horarios predefinidos a las tres primeras actividades
      if (dayActivities.length >= 3) {
        dayActivities[0].fechaInicio = '10:00';
        dayActivities[0].fechaFinal = '11:30';
  
        dayActivities[1].fechaInicio = '13:30';
        dayActivities[1].fechaFinal = '15:00';
  
        dayActivities[2].fechaInicio = '17:30';
        dayActivities[2].fechaFinal = '19:00';
      }
    }
  
    // Convertir el Map de nuevo a un array y ordenarlo por fecha
    this.actividades = Array.from(activitiesByDay.values()).flat();
    this.actividades.sort((a, b) => a.date.getTime() - b.date.getTime());
  }
}
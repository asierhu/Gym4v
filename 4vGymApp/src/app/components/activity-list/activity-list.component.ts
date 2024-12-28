import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivityComponent } from '../activity/activity.component';
import { Activity } from '../../models/activity';
import { ActivityService } from '../../services/activity.service';

@Component({
  selector: 'app-activity-list',
  imports: [CommonModule],
  templateUrl: './activity-list.component.html',
  styleUrl: './activity-list.component.scss'
})
export class ActivityListComponent {
addActivity(arg0: any) {
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
  }
}
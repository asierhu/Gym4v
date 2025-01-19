import { Component, Input, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Activity } from '../../models/activity';
import { ActivityService } from '../../services/activity.service';
import { ActivityPopUpComponent } from '../activity-pop-up/activity-pop-up.component';

@Component({
  selector: 'app-activity-list',
  imports: [CommonModule],
  templateUrl: './activity-list.component.html',
  styleUrl: './activity-list.component.scss'
})
export class ActivityListComponent {
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
  }


}
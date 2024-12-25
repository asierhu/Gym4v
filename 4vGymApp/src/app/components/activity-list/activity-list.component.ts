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
  actividades: Activity[] = [];

  constructor(private actividadService: ActivityService) {}

  ngOnInit(): void {
    this.actividades = this.actividadService.getActividades();
  }
}
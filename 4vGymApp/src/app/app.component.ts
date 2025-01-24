import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { CommonModule } from '@angular/common';
import { ModeSelectorComponent } from "./components/mode-selector/mode-selector.component";
import { CalendarComponent } from "./components/calendar/calendar.component";
import { ActivityListComponent } from "./components/activity-list/activity-list.component";
import { CarrouselComponent } from "./components/carrousel/carrousel.component";
import { DatePickerComponent } from "./components/date-picker/date-picker.component";
import { MonitorPopUpComponent } from "./components/monitor-pop-up/monitor-pop-up.component";
import { BotonPopupComponent } from "./boton-popup/boton-popup.component";
import { SearchMonitorComponent } from "./components/search-monitor/search-monitor.component";
import { Monitor } from './models/monitor';
import { MonitorService } from './services/monitor.service';


@Component({
  selector: 'app-root',
  imports: [NavbarComponent, CommonModule, ModeSelectorComponent, CalendarComponent, ActivityListComponent, CarrouselComponent, DatePickerComponent, BotonPopupComponent, SearchMonitorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(private monitorService: MonitorService) {}
  monitores: Monitor[] = [];
  title = '4vGymApp';
  groupedMonitores: Monitor [][]=[];
  // Opción actual seleccionada
  currentOption = 'actividades';

  onMonitorAdded($event: Monitor) {
    this.monitorService.postMonitorAutoIncrement($event.name, $event.email, $event.tel, $event.fechaInicio, $event.img);
    alert("Monitor añadido");
    this.monitores = this.monitorService.getMonitores();
    this.groupedMonitores = this.groupMonitors(this.monitores, 3);
  }
  
  monitorCarrouselListEmit(event: string) {
    this.monitores = this.monitorService.getMonitoresByName(event);
    this.groupedMonitores = this.groupMonitors(this.monitores, 3);
  }


  // Actualizar la opción actual según el evento recibido
  onOptionSelected(option: string) {
    this.currentOption = option;
  }

  groupMonitors(monitors: Monitor[], groupSize: number): Monitor[][] {
    const grouped = [];
    for (let i = 0; i < monitors.length; i += groupSize) {
      grouped.push(monitors.slice(i, i + groupSize));
    }
    return grouped;
  }
  ngOnInit(): void {
    this.monitores = this.monitorService.getMonitores();
    this.groupedMonitores = this.groupMonitors(this.monitores, 3); 
  }

  currentDate: Date = new Date(); // Fecha actual seleccionada

  // Método para manejar cambios de fecha
  onDateChange(newDate: Date): void {
    this.currentDate = newDate;
    console.log('Fecha seleccionada:', newDate); // Aquí actualizas la lógica según la fecha seleccionada
  }
}

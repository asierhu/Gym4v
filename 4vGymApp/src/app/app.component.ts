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


@Component({
  selector: 'app-root',
  imports: [NavbarComponent, CommonModule, ModeSelectorComponent, CalendarComponent, ActivityListComponent, CarrouselComponent, DatePickerComponent, MonitorPopUpComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = '4vGymApp';

  // Opción actual seleccionada
  currentOption = 'actividades';

  // Actualizar la opción actual según el evento recibido
  onOptionSelected(option: string) {
    this.currentOption = option;
  }


  currentDate: Date = new Date(); // Fecha actual seleccionada

  // Método para manejar cambios de fecha
  onDateChange(newDate: Date): void {
    this.currentDate = newDate;
    console.log('Fecha seleccionada:', newDate); // Aquí actualizas la lógica según la fecha seleccionada
  }
}

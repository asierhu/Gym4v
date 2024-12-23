import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { CommonModule } from '@angular/common';
import { ModeSelectorComponent } from "./components/mode-selector/mode-selector.component";
import { CalendarComponent } from "./components/calendar/calendar.component";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, CommonModule, ModeSelectorComponent, CalendarComponent],
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
}

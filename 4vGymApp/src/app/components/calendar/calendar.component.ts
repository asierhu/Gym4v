import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCardModule } from '@angular/material/card';

import {provideNativeDateAdapter} from '@angular/material/core';

@Component({
  selector: 'app-calendar',
  imports: [CommonModule, MatCardModule, MatDatepickerModule],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.scss',
  providers: [provideNativeDateAdapter()],

})
export class CalendarComponent {
  // Propiedad para la fecha seleccionada
  selectedDate: Date | null = null; // Inicializa la variable

  // Método opcional para depuración
  onDateSelected(event: Date) {
    this.selectedDate = event;
    console.log('Fecha seleccionada:', this.selectedDate);
  }
}

import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCardModule } from '@angular/material/card';
import { Input } from '@angular/core';

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

  @Output() dateConfirmed = new EventEmitter<Date>();

  // Método opcional para depuración
  confirmDate() {
    if (this.selectedDate) {
      this.dateConfirmed.emit(this.selectedDate);
    }
  }

  clearDate() {
    this.selectedDate = null;
  }
}

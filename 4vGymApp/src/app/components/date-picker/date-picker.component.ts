import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-date-picker',
  imports: [],
  templateUrl: './date-picker.component.html',
  styleUrl: './date-picker.component.scss'
})
export class DatePickerComponent {
  @Input() selectedDate: Date = new Date();
  @Output() dateChanged: EventEmitter<Date> = new EventEmitter<Date>();

  // Navegar al día anterior
  goToPreviousDay(): void {
    const previousDate = new Date(this.selectedDate);
    previousDate.setDate(previousDate.getDate() - 1);
    this.updateDate(previousDate);
  }

  // Navegar al día siguiente
  goToNextDay(): void {
    const nextDate = new Date(this.selectedDate);
    nextDate.setDate(nextDate.getDate() + 1);
    this.updateDate(nextDate);
  }

  // Manejar selección de fecha en el input
  onDateSelected(event: any): void {
    const newDate = new Date(event.target.value);
    this.updateDate(newDate);
  }

  // Actualizar la fecha y emitir el evento
  private updateDate(newDate: Date): void {
    this.selectedDate = newDate;
    this.dateChanged.emit(newDate);
  }

  // Formatear fecha para mostrar en pantalla
  formatDate(date: Date): string {
    const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long', year: 'numeric' };
    return new Intl.DateTimeFormat('es-ES', options).format(date); // Formato español
  }

  // Formatear fecha para el input de tipo date
  formatDateForInput(date: Date): string {
    return date.toISOString().split('T')[0]; // Formato 'yyyy-MM-dd'
  }
}

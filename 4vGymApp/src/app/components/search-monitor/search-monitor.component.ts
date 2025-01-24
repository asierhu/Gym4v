import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormsModule } from '@angular/forms';
import { Monitor } from '../../models/monitor';

@Component({
  selector: 'app-search-monitor',
  imports: [FormsModule],
  templateUrl: './search-monitor.component.html',
  styleUrl: './search-monitor.component.scss'
})
export class SearchMonitorComponent {
  monitores: Monitor[] = [];
  buscar: string='';
  groupedMonitores: Monitor[][] = [];

  @Output() monitorCarrouselList = new EventEmitter<string>();

  onInputChange(event: Event): void {
    const inputValue = (event.target as HTMLInputElement).value;
    this.monitorCarrouselListEmit(inputValue);
  }
  monitorCarrouselListEmit(nombre: string): void {
    this.monitorCarrouselList.emit(nombre);
  }
}



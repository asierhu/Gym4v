import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormsModule } from '@angular/forms';
import { Monitor } from '../../models/monitor';
import { MonitorService } from '../../services/monitor.service';
import { CarrouselComponent } from "../carrousel/carrousel.component";

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
  constructor(private monitorService: MonitorService) {}
  @Output() monitorCarrouselList = new EventEmitter<string>();

  onInputChange(event: Event): void {
    const inputValue = (event.target as HTMLInputElement).value;
    this.monitorCarrouselListEmit(inputValue);
  }
  monitorCarrouselListEmit(nombre: string): void {
    this.monitorCarrouselList.emit(nombre);
  }
}



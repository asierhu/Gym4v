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
export class SearchMonitorComponent implements OnInit {
  monitores: Monitor[] = [];
  buscar: string='';
  groupedMonitores: Monitor[][] = [];
  constructor(private monitorService: MonitorService) {}
  @Output() monitorCarrouselList = new EventEmitter<Monitor[][]>();

  ngOnInit(): void {
    this.monitores = this.monitorService.getMonitores();
    this.groupedMonitores = this.groupMonitors(this.monitores, 3); // Agrupar monitores de 3 en 3
    this.monitorCarrouselListEmit(this.groupedMonitores);
  }
  groupMonitors(monitors: Monitor[], groupSize: number): Monitor[][] {
    const grouped = [];
    for (let i = 0; i < monitors.length; i += groupSize) {
      grouped.push(monitors.slice(i, i + groupSize));
    }
    return grouped;
  }
  onInputChange(event: Event): void {
    const inputValue = (event.target as HTMLInputElement).value;
    this.groupedMonitores = this.groupMonitors(this.monitorService.getMonitoresByName(inputValue), 3);
    
    this.monitorCarrouselListEmit(this.groupedMonitores);
  }
  monitorCarrouselListEmit(monitores: Monitor[][]): void {
    this.monitorCarrouselList.emit(monitores);
  }
}


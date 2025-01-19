import { Component, OnInit } from '@angular/core';
import { CarrouselCardComponent } from "../carrousel-card/carrousel-card.component";
import { MonitorService } from "../../services/monitor.service";
import { Monitor } from '../../models/monitor';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-carrousel',
  standalone: true, // Indica que es un componente independiente
  imports: [CommonModule, CarrouselCardComponent], // Asegúrate de importar MonitorCardComponent
  templateUrl: './carrousel.component.html',
  styleUrl: './carrousel.component.scss'
})

export class CarrouselComponent implements OnInit {

  monitores: Monitor[] = []; // Lista de monitores
  groupedMonitores: Monitor[][] = []; // Grupos de monitores para cada slide

  constructor(private monitorService: MonitorService) {}

  ngOnInit(): void {
    this.monitores = this.monitorService.getMonitores();
    this.groupedMonitores = this.groupMonitors(this.monitores, 3); // Agrupar monitores de 3 en 3
  }

  // Método para agrupar los monitores
  groupMonitors(monitors: Monitor[], groupSize: number): Monitor[][] {
    const grouped = [];
    for (let i = 0; i < monitors.length; i += groupSize) {
      grouped.push(monitors.slice(i, i + groupSize));
    }
    return grouped;
  }
}
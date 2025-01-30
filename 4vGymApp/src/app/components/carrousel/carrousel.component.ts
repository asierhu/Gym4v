import { Component, Input, OnInit } from '@angular/core';
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

export class CarrouselComponent{

  @Input() groupedMonitores: Monitor[][] = []; // Lista de monitores para el carrousel: ; // Grupos de monitores para cada slide
  @Input() service: MonitorService = new MonitorService();
}
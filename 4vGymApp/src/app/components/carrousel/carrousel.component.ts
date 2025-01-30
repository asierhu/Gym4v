import { Component, Input, OnInit } from '@angular/core';
import { CarrouselCardComponent } from "../carrousel-card/carrousel-card.component";
import { MonitorService } from "../../services/monitor.service";
import { Monitor } from '../../models/monitor';
import { CommonModule } from '@angular/common';
import { EditarPopupComponent } from "../editar-popup/editar-popup.component";
@Component({
  selector: 'app-carrousel',
  standalone: true, // Indica que es un componente independiente
  imports: [CommonModule, CarrouselCardComponent, EditarPopupComponent], // Asegúrate de importar MonitorCardComponent
  templateUrl: './carrousel.component.html',
  styleUrl: './carrousel.component.scss'
})

export class CarrouselComponent{
  onMonitorEdited($event: number) {
    this.id = $event;
  }

  @Input() groupedMonitores: Monitor[][] = []; // Lista de monitores para el carrousel: ; // Grupos de monitores para cada slide
  @Input() service: MonitorService = new MonitorService();
  id: number=-1;
  
}
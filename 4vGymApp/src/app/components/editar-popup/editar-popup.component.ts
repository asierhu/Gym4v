import { Component, Input } from '@angular/core';
import { MonitorService } from '../../services/monitor.service';
import { Monitor } from '../../models/monitor';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-editar-popup',
  imports: [CommonModule, FormsModule],
  templateUrl: './editar-popup.component.html',
  styleUrl: './editar-popup.component.scss'
})
export class EditarPopupComponent {
  @Input() id: number =-1;
  @Input() service: MonitorService = new MonitorService();
  @Input() monitorName: string ='';
  @Input() monitorEmail: string='';
  @Input() monitorTel:   string='';
  @Input() monitor:  Monitor = new Monitor(-1,'', '', '', '', '');

  btnAccept() {
    alert("No puedes editar un monitor");
    this.service.editMonitor(new Monitor(3, this.monitorName, this.monitorEmail, this.monitorTel, '', ''));   
  }
  constructor() { 
    console.log("Editar popup "+ this.id);
  }

}

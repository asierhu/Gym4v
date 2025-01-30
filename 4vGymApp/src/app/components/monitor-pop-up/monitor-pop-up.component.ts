import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MonitorService } from '../../services/monitor.service';
import { Monitor } from '../../models/monitor';

@Component({
  selector: 'app-monitor-pop-up',
  imports: [FormsModule],
  templateUrl: './monitor-pop-up.component.html',
  styleUrl: './monitor-pop-up.component.scss'
})
export class MonitorPopUpComponent {
  @Input() id: number =-1;
  @Input() service: MonitorService = new MonitorService();
  @Input() monitorName: string ='';
  @Input() monitorEmail: string='';
  @Input() monitorTel:   string='';
  @Input() monitor:  Monitor = new Monitor(-1,'', '', '', '', '');

  btnAccept() {
    if (this.monitorName == '' || this.monitorTel == '' || this.monitorEmail == '') {
      alert("Tienes que rellenar todos los campos");
    }else{
      this.monitorAdded.emit(new Monitor(-1,this.monitorName, this.monitorEmail, this.monitorTel, '', ''));
    }   
  }
  @Output() monitorAdded = new EventEmitter<Monitor>();
}

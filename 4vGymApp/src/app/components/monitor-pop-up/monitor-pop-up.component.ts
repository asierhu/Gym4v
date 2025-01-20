import { Component } from '@angular/core';

@Component({
  selector: 'app-monitor-pop-up',
  imports: [],
  templateUrl: './monitor-pop-up.component.html',
  styleUrl: './monitor-pop-up.component.scss'
})
export class MonitorPopUpComponent {
  user = {
    nombre: '',
    email: '',
    telefono: '',
  };

  onSubmit() {
    console.log('Formulario enviado:', this.user);
  }

  onCancel() {
    console.log('Formulario cancelado');
    this.user = { nombre: '', email: '', telefono: '' };
  }
}

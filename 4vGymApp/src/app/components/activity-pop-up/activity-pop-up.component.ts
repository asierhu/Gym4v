import { Component } from '@angular/core';

// Importa Bootstrap (para manejar los modales desde TypeScript)
declare var bootstrap: any;
@Component({
  selector: 'app-activity-pop-up',
  imports: [],
  templateUrl: './activity-pop-up.component.html',
  styleUrl: './activity-pop-up.component.scss'
})
export class ActivityPopUpComponent {
  openModal() {
    // Busca el modal en el DOM
    const modalElement = document.getElementById('addActivityModal') as HTMLElement;
    if (modalElement) {
      // Crea y muestra el modal
      const modal = new bootstrap.Modal(modalElement);
      modal.show();
    } else {
      console.error('El modal no fue encontrado en el DOM');
    }
  }

  onAccept() {
    console.log('Actividad añadida');
    // Cierra el modal si es necesario
    const modalElement = document.getElementById('addActivityModal') as HTMLElement;
    if (modalElement) {
      const modal = bootstrap.Modal.getInstance(modalElement);
      modal.hide();
    }
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-boton-popup',
  imports: [],
  templateUrl: './boton-popup.component.html',
  styleUrl: './boton-popup.component.scss'
})
export class BotonPopupComponent {
  openModal() {
    alert("Modal abierto");
  }

}

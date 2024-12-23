import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-mode-selector',
  imports: [],
  templateUrl: './mode-selector.component.html',
  styleUrl: './mode-selector.component.scss'
})
export class ModeSelectorComponent {
  // Estado actual: true para actividades, false para monitores
  isActividades = true;

  // Evento para notificar el cambio de opción al componente padre
  @Output() optionSelected = new EventEmitter<string>();

  // Cambiar la opción seleccionada
  selectOption(option: string) {
    this.isActividades = option === 'actividades';
    this.optionSelected.emit(option);
  }
}

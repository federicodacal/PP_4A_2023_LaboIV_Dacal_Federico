import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-container-listado',
  templateUrl: './container-listado.component.html',
  styleUrls: ['./container-listado.component.css']
})
export class ContainerListadoComponent {

  @Input() listadoRecibido?:any[];
  @Output() eventSeleccionarContainer:EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  seleccionarContainer(container:any) {
    this.eventSeleccionarContainer.emit(container);
  }

}

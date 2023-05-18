import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-producto-listado',
  templateUrl: './producto-listado.component.html',
  styleUrls: ['./producto-listado.component.css']
})
export class ProductoListadoComponent {

  @Input() listadoRecibido?:any[];
  @Output() eventSeleccionarProducto:EventEmitter<any> = new EventEmitter<any>();

  constructor () { }

  seleccionarProducto(producto:any) {
    this.eventSeleccionarProducto.emit(producto);
  }

}

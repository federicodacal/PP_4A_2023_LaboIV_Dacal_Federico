import { Component } from '@angular/core';

@Component({
  selector: 'app-producto-alta',
  templateUrl: './producto-alta.component.html',
  styleUrls: ['./producto-alta.component.css']
})
export class ProductoAltaComponent {

  paisSeleccionado:any;

  constructor() { }

  tomarPais($event:any) {
    this.paisSeleccionado = $event;
  }

}

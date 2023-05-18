import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pais-detalle',
  templateUrl: './pais-detalle.component.html',
  styleUrls: ['./pais-detalle.component.css']
})
export class PaisDetalleComponent {

  @Input() productoRecibido?:any = {};

}

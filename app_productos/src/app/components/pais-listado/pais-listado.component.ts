import { Component, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { PaisesService } from 'src/app/services/paises.service';

@Component({
  selector: 'app-pais-listado',
  templateUrl: './pais-listado.component.html',
  styleUrls: ['./pais-listado.component.css']
})
export class PaisListadoComponent {

  @Output() eventSeleccionarPais:EventEmitter<any> = new EventEmitter<any>();

  suscripcion!:Subscription;
  paises:any[] = [];

  constructor(private paisesService:PaisesService) { }

  ngOnInit(): void {
    this.traer();
  }

  ngOnDestroy(): void {
    this.suscripcion.unsubscribe();
  }

  traer() {
    this.suscripcion = this.paisesService.traerPaises().subscribe((res) => {
      this.paises = res;
      console.info('Paises', res);
    });
  }

  seleccionarPais(pais:any) {
    this.eventSeleccionarPais.emit(pais);
  }

}

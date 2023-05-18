import { Component, OnInit, OnDestroy } from '@angular/core';
import { Producto } from 'src/app/classes/producto';
import { ProductosService } from 'src/app/services/productos.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-producto-detalle',
  templateUrl: './producto-detalle.component.html',
  styleUrls: ['./producto-detalle.component.css']
})
export class ProductoDetalleComponent implements OnInit, OnDestroy {

  listadoProductos:Producto[] = [];
  productoSeleccionado?:any = {};
  loading:boolean = false;
  suscripcion!:Subscription;

  constructor(private productoService:ProductosService) { }

  ngOnInit(): void {
    this.loading = true;
    this.traerProductos();
  }

  ngOnDestroy(): void {
    this.suscripcion.unsubscribe();
  }

  traerProductos() {
    this.suscripcion = this.productoService.traer().subscribe((res:any) => {
      console.info('Productos', res);
      this.listadoProductos = res as Array<Producto>;
      this.loading = false;
    });
  }

  detallarProductoSeleccionado($event:any) {
    this.productoSeleccionado = $event;
  }


}

import { Component, Input, OnInit } from '@angular/core';
import { Producto } from 'src/app/classes/producto';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-producto-listado-publico',
  templateUrl: './producto-listado-publico.component.html',
  styleUrls: ['./producto-listado-publico.component.css']
})
export class ProductoListadoPublicoComponent implements OnInit {

  listadoProductos: Producto[] = [];
  listadoProductosFiltradoPorStock: Producto[] = [];

  constructor(private productoService:ProductosService) { }

  ngOnInit(): void {
    this.productoService.traer().subscribe((res) => {
      if (res != null) {
        this.listadoProductos = res;
        this.listadoProductosFiltradoPorStock = this.listadoProductos.filter(p => p.stock > 0);
      }
    })
  }

}

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-producto-info',
  templateUrl: './producto-info.component.html',
  styleUrls: ['./producto-info.component.css']
})
export class ProductoInfoComponent implements OnInit{

  @Input() productoRecibido:any= {};

  imgGenerica:string='../../assets/img/producto.png';

  constructor() { 
    console.info('Producto detalle en info', this.productoRecibido);
  }

  ngOnInit(): void {
    console.info(this.productoRecibido);
  }

}

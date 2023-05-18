import { Component, Input } from '@angular/core';
import { Producto } from 'src/app/classes/producto';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductosService } from 'src/app/services/productos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-producto-form',
  templateUrl: './producto-form.component.html',
  styleUrls: ['./producto-form.component.css']
})
export class ProductoFormComponent {

  @Input() paisForm?:any

  forms:FormGroup;

  constructor(private fb:FormBuilder, private productoService:ProductosService) {
    this.forms=this.fb.group({
      codigo: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(8)]],
      descripcion: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(24)]],
      precio: ['', [Validators.required, Validators.min(1), Validators.max(100000)]],
      stock: ['', [Validators.required, Validators.min(1), Validators.max(10000)]],
      paisDeOrigen: ['', [Validators.required]],
      comestible: ['', [Validators.required]]
    });
  }

  guardarProducto() {
    console.info('Form', this.forms);

    if(this.forms.invalid) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Campos incompletos o incorrectos',
      });
    }
    else {
      let esComestible:boolean = this.forms.value.comestible === 'si' ? true : false;

      const producto:Producto = {
        codigo: this.forms.value.codigo,
        descripcion: this.forms.value.descripcion,
        precio: this.forms.value.precio,
        stock: this.forms.value.stock,
        paisDeOrigen : this.forms.value.paisDeOrigen,
        bandera : this.paisForm.flags.png,
        comestible: esComestible,
      }

      console.info('Producto', producto);

      this.productoService.agregar(producto)
        .then(() => {
          Swal.fire(
            'Éxito!',
            'Producto guardado',
            'success'
          );
          this.forms.reset();
          this.paisForm = null;
        })
        .catch((err) => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Ocurrió un problema',
          });
        });
    }
  }

}

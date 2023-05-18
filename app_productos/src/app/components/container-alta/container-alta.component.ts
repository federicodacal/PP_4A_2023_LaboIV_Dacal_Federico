import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-container-alta',
  templateUrl: './container-alta.component.html',
  styleUrls: ['./container-alta.component.css']
})
export class ContainerAltaComponent {
  @Output() eventCreamosContainer:EventEmitter<any> = new EventEmitter<any>();

  forms:FormGroup

  constructor(private fb:FormBuilder) {
    this.forms=this.fb.group({
      codigo: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(8)]],
      color: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(24)]],
      empresa: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(24)]],
      capacidad: ['', [Validators.required, Validators.min(1), Validators.max(10000)]],
    });
  }

  guardarContainer() {
    if(this.forms.invalid) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Campos incompletos o incorrectos',
      });
    }
    else {
      
      const container = {
        codigo: this.forms.value.codigo,
        color: this.forms.value.color,
        empresa: this.forms.value.empresa,
        capacidad: this.forms.value.capacidad,
      }

      this.eventCreamosContainer.emit(container);

      this.forms.reset();
    }
  }
}

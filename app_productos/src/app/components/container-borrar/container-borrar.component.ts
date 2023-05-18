import { Component, Input, Output, EventEmitter, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-container-borrar',
  templateUrl: './container-borrar.component.html',
  styleUrls: ['./container-borrar.component.css']
})
export class ContainerBorrarComponent implements OnInit, OnChanges{
  @Input() containerRecibido:any={};
  @Output() eventBorramosContainer:EventEmitter<any> = new EventEmitter<any>();

  forms:FormGroup

  constructor(private fb:FormBuilder) {
    this.forms=this.fb.group({
      codigo: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(8)]],
      color: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(24)]],
      empresa: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(24)]],
      capacidad: ['', [Validators.required, Validators.min(1), Validators.max(10000)]],
    });
  }

  ngOnInit(): void {
    
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.info('En changes', changes);
    this.forms.patchValue({
      codigo: changes['containerRecibido'].currentValue.codigo,
      color: changes['containerRecibido'].currentValue.color,
      empresa: changes['containerRecibido'].currentValue.empresa,
      capacidad: changes['containerRecibido'].currentValue.capacidad
    });
  }

  borrarContainer() {
    if(this.forms.invalid) {
      
      console.info('form', this.forms);

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
        id: this.containerRecibido.id
      }

      this.eventBorramosContainer.emit(container);
      this.forms.reset();
    }
  }
}

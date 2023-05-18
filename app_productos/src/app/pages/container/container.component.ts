import { Component, OnInit, OnDestroy } from '@angular/core';
import { Container } from 'src/app/classes/container';
import { ContainersService } from 'src/app/services/containers.service';
import { Subscription } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit, OnDestroy{

  listadoContainers:Container[] = [];
  containerSeleccionado:any = {};
  suscripcion!:Subscription;

  constructor(private containerService:ContainersService) { }

  ngOnInit(): void {
    this.traerContainers();
  }

  ngOnDestroy(): void {
    this.suscripcion.unsubscribe();
  }

  traerContainers() {
    this.suscripcion = this.containerService.traer().subscribe((res) => {
      console.info('Containers', res);
      this.listadoContainers = res as Array<Container>;
    });
  }

  agregarContainer($event:Event) {

    let container = new Container('','',0);
    container = $event as any as Container;

    this.containerService.agregar(container);

    Swal.fire({
      icon: 'success',
      title: 'Container agregado',
      showConfirmButton: false,
      timer: 2000
    });
  }

  detallarContainerSeleccionado($event:any) {
    this.containerSeleccionado = $event;
  }

  modificarContainer($event:any) {
    let container = new Container('','',0);
    container = $event as any as Container;

    this.containerService.modificar(container);

    Swal.fire({
      icon: 'success',
      title: 'Container actualizado',
      showConfirmButton: false,
      timer: 2000
    });
  }

  borrarContainer($event:any) {
    let container = new Container('','',0);
    container = $event as any as Container;

    this.containerService.borrar(container);

    Swal.fire({
      icon: 'warning',
      title: 'Container eliminado',
      showConfirmButton: false,
      timer: 2000
    });
  }

}

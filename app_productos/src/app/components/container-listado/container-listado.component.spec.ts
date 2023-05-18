import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerListadoComponent } from './container-listado.component';

describe('ContainerListadoComponent', () => {
  let component: ContainerListadoComponent;
  let fixture: ComponentFixture<ContainerListadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerListadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContainerListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

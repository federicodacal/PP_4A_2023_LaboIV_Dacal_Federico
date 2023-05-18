import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerModificacionComponent } from './container-modificacion.component';

describe('ContainerModificacionComponent', () => {
  let component: ContainerModificacionComponent;
  let fixture: ComponentFixture<ContainerModificacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerModificacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContainerModificacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaisDetalleComponent } from './pais-detalle.component';

describe('PaisDetalleComponent', () => {
  let component: PaisDetalleComponent;
  let fixture: ComponentFixture<PaisDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaisDetalleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaisDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoListadoPublicoComponent } from './producto-listado-publico.component';

describe('ProductoListadoPublicoComponent', () => {
  let component: ProductoListadoPublicoComponent;
  let fixture: ComponentFixture<ProductoListadoPublicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductoListadoPublicoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductoListadoPublicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

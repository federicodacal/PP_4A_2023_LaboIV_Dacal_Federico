import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaisListadoComponent } from './pais-listado.component';

describe('PaisListadoComponent', () => {
  let component: PaisListadoComponent;
  let fixture: ComponentFixture<PaisListadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaisListadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaisListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

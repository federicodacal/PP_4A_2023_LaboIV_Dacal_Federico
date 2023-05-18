import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerBorrarComponent } from './container-borrar.component';

describe('ContainerBorrarComponent', () => {
  let component: ContainerBorrarComponent;
  let fixture: ComponentFixture<ContainerBorrarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerBorrarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContainerBorrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

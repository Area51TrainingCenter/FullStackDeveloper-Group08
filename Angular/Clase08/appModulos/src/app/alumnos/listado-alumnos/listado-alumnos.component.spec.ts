import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoAlumnosComponent } from './listado-alumnos.component';

describe('ListadoAlumnosComponent', () => {
  let component: ListadoAlumnosComponent;
  let fixture: ComponentFixture<ListadoAlumnosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadoAlumnosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoAlumnosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

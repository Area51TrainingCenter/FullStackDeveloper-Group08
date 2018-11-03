import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoAlumnoComponent } from './listado-alumno.component';

describe('ListadoAlumnoComponent', () => {
  let component: ListadoAlumnoComponent;
  let fixture: ComponentFixture<ListadoAlumnoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadoAlumnoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoAlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

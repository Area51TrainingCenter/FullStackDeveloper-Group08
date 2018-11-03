import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdicionAlumnoComponent } from './edicion-alumno.component';

describe('EdicionAlumnoComponent', () => {
  let component: EdicionAlumnoComponent;
  let fixture: ComponentFixture<EdicionAlumnoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdicionAlumnoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdicionAlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

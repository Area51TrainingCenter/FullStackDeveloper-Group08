import { TestBed, inject } from '@angular/core/testing';

import { AlumnosService } from './alumnos.service';

describe('AlumnosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AlumnosService]
    });
  });

  it('should be created', inject([AlumnosService], (service: AlumnosService) => {
    expect(service).toBeTruthy();
  }));
});

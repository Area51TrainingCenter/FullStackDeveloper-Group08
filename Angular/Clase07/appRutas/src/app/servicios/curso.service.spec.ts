import { TestBed, inject } from '@angular/core/testing';

import { CursoService } from './curso.service';

describe('CursoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CursoService]
    });
  });

  it('should be created', inject([CursoService], (service: CursoService) => {
    expect(service).toBeTruthy();
  }));
});

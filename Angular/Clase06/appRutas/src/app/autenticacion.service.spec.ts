import { TestBed, inject } from '@angular/core/testing';

import { AutenticacionService } from './autenticacion.service';

describe('AutenticacionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AutenticacionService]
    });
  });

  it('should be created', inject([AutenticacionService], (service: AutenticacionService) => {
    expect(service).toBeTruthy();
  }));
});

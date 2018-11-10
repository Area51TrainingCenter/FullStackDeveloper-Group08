import { TestBed, async, inject } from '@angular/core/testing';

import { AutorizacionGuard } from './autorizacion.guard';

describe('AutorizacionGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AutorizacionGuard]
    });
  });

  it('should ...', inject([AutorizacionGuard], (guard: AutorizacionGuard) => {
    expect(guard).toBeTruthy();
  }));
});

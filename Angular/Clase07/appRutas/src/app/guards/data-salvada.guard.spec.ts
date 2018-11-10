import { TestBed, async, inject } from '@angular/core/testing';

import { DataSalvadaGuard } from './data-salvada.guard';

describe('DataSalvadaGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataSalvadaGuard]
    });
  });

  it('should ...', inject([DataSalvadaGuard], (guard: DataSalvadaGuard) => {
    expect(guard).toBeTruthy();
  }));
});

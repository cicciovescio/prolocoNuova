import { TestBed, inject } from '@angular/core/testing';

import { PositiveNegativeService } from './positive-negative.service';

describe('PositiveNegativeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PositiveNegativeService]
    });
  });

  it('should be created', inject([PositiveNegativeService], (service: PositiveNegativeService) => {
    expect(service).toBeTruthy();
  }));
});

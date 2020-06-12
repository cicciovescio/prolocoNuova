import { TestBed, inject } from '@angular/core/testing';

import { VarietyService } from './variety.service';

describe('VarietyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VarietyService]
    });
  });

  it('should be created', inject([VarietyService], (service: VarietyService) => {
    expect(service).toBeTruthy();
  }));
});
 
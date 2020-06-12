import { TestBed, inject } from '@angular/core/testing';

import { RawAnalysisService } from './raw-analysis.service';

describe('RawAnalysisService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RawAnalysisService]
    });
  });

  it('should be created', inject([RawAnalysisService], (service: RawAnalysisService) => {
    expect(service).toBeTruthy();
  }));
});

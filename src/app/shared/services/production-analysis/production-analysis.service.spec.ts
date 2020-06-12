import { TestBed, inject } from '@angular/core/testing';

import { ProductionAnalysisService } from './production-analysis.service';

describe('ProductionAnalysisService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductionAnalysisService]
    });
  });

  it('should be created', inject([ProductionAnalysisService], (service: ProductionAnalysisService) => {
    expect(service).toBeTruthy();
  }));
});

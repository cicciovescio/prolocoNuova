import { TestBed, inject } from '@angular/core/testing';

import { AnalystService } from './analyst.service';

describe('AnalysisService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AnalystService]
    });
  });
 
  it('should be created', inject([AnalystService], (service: AnalystService) => {
    expect(service).toBeTruthy();
  }));
});

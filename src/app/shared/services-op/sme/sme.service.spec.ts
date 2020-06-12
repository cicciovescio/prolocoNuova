import { TestBed, inject } from '@angular/core/testing';

import { SmeService } from './sme.service';

describe('SmeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SmeService]
    });
  });

  it('should be created', inject([SmeService], (service: SmeService) => {
    expect(service).toBeTruthy();
  }));
});
 
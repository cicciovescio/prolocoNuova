import { TestBed, inject } from '@angular/core/testing';

import { StableService } from './stable.service';

describe('StableService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StableService]
    });
  });

  it('should be created', inject([StableService], (service: StableService) => {
    expect(service).toBeTruthy();
  }));
});

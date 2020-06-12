import { TestBed, inject } from '@angular/core/testing';

import { ArfdService } from './arfd.service';

describe('ArfdService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ArfdService]
    });
  });

  it('should be created', inject([ArfdService], (service: ArfdService) => {
    expect(service).toBeTruthy();
  }));
});

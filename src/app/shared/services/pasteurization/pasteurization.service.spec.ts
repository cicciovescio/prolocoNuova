import { TestBed, inject } from '@angular/core/testing';

import { PasteurizationService } from './pasteurization.service';

describe('PateurizationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PasteurizationService]
    });
  });

  it('should be created', inject([PasteurizationService], (service: PasteurizationService) => {
    expect(service).toBeTruthy();
  }));
});

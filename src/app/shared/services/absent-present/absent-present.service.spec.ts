import { TestBed, inject } from '@angular/core/testing';

import { AbsentPresentService } from './absent-present.service';

describe('AbsentPresentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AbsentPresentService]
    });
  });

  it('should be created', inject([AbsentPresentService], (service: AbsentPresentService) => {
    expect(service).toBeTruthy();
  }));
});

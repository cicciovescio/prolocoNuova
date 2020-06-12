import { TestBed, inject } from '@angular/core/testing';

import { SchedaAnalisiService } from './scheda-analisi.service';

describe('SchedaAnalisiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SchedaAnalisiService]
    });
  });

  it('should be created', inject([SchedaAnalisiService], (service: SchedaAnalisiService) => {
    expect(service).toBeTruthy();
  }));
});
 
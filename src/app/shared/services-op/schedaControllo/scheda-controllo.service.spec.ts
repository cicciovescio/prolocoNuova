import { TestBed, inject } from '@angular/core/testing';

import { SchedaControlloService } from './scheda-controllo.service';

describe('SchedaControlloService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SchedaControlloService]
    });
  });

  it('should be created', inject([SchedaControlloService], (service: SchedaControlloService) => {
    expect(service).toBeTruthy();
  }));
});
 
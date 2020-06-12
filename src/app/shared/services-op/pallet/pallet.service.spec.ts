import { TestBed, inject } from '@angular/core/testing';

import { PalletService } from './pallet.service';

describe('PalletService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PalletService]
    });
  });

  it('should be created', inject([PalletService], (service: PalletService) => {
    expect(service).toBeTruthy();
  }));
});
 
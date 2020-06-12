import { TestBed, inject } from '@angular/core/testing';

import { PalletLotService } from './palletLot.service';

describe('PalletLotService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PalletLotService]
    });
  });

  it('should be created', inject([PalletLotService], (service: PalletLotService) => {
    expect(service).toBeTruthy();
  }));
});
 
import { TestBed, inject } from '@angular/core/testing';

import { MilkTypeService } from './milk-type.service';

describe('MilkTypeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MilkTypeService]
    });
  });

  it('should be created', inject([MilkTypeService], (service: MilkTypeService) => {
    expect(service).toBeTruthy();
  }));
});

import { TestBed, inject } from '@angular/core/testing';

import { FoodSheetAnagraphicService } from './food-sheet-anagraphic.service';

describe('FoodSheetAnagraphicService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FoodSheetAnagraphicService]
    });
  });

  it('should be created', inject([FoodSheetAnagraphicService], (service: FoodSheetAnagraphicService) => {
    expect(service).toBeTruthy();
  }));
});

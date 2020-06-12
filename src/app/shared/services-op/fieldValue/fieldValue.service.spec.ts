import { TestBed, inject } from '@angular/core/testing';

import { FieldValueService } from './fieldValue.service';

describe('FieldValueService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FieldValueService]
    });
  });

  it('should be created', inject([FieldValueService], (service: FieldValueService) => {
    expect(service).toBeTruthy();
  }));
});
 
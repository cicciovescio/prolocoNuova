import { TestBed, inject } from '@angular/core/testing';
import { FieldQdcService } from './fieldQdc.service';


describe('FieldQdcService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FieldQdcService]
    });
  });

  it('should be created', inject([FieldQdcService], (service: FieldQdcService) => {
    expect(service).toBeTruthy();
  }));
});
 
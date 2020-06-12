import { TestBed, inject } from '@angular/core/testing';
import { TypeEventService } from './typeEvent.service';


describe('TypeEventService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TypeEventService]
    });
  });

  it('should be created', inject([TypeEventService], (service: TypeEventService) => {
    expect(service).toBeTruthy();
  }));
});
 
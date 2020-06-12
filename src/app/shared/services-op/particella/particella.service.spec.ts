import { TestBed, inject } from '@angular/core/testing';
import { ParticellaService } from './particella.service';


describe('ParticellaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ParticellaService]
    });
  });

  it('should be created', inject([ParticellaService], (service: ParticellaService) => {
    expect(service).toBeTruthy();
  }));
});
 
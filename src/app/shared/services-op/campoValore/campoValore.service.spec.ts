import { TestBed, inject } from '@angular/core/testing';
import { CampoValoreService } from './campoValore.service';


describe('CampoValoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CampoValoreService]
    });
  });

  it('should be created', inject([CampoValoreService], (service: CampoValoreService) => {
    expect(service).toBeTruthy();
  }));
}); 

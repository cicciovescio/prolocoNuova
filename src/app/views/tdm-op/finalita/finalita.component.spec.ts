import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalitaComponent } from './finalita.component';

describe('FinalitaComponent', () => {
  let component: FinalitaComponent;
  let fixture: ComponentFixture<FinalitaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinalitaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

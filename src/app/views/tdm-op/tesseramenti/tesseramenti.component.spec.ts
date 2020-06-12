import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TesseramentiComponent } from './tesseramenti.component';

describe('TesseramentiComponent', () => {
  let component: TesseramentiComponent;
  let fixture: ComponentFixture<TesseramentiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TesseramentiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TesseramentiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BakerlooComponent } from './bakerloo.component';

describe('BakerlooComponent', () => {
  let component: BakerlooComponent;
  let fixture: ComponentFixture<BakerlooComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BakerlooComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BakerlooComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

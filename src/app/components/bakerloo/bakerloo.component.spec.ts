import { ComponentFixture, TestBed, waitForAsync as  } from '@angular/core/testing';

import { BakerlooComponent } from './bakerloo.component';

describe('BakerlooComponent', () => {
  let component: BakerlooComponent;
  let fixture: ComponentFixture<BakerlooComponent>;

  beforeEach(waitForAsync(() => {
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

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LondonOvergroundComponent } from './london-overground.component';

describe('LondonOvergroundComponent', () => {
  let component: LondonOvergroundComponent;
  let fixture: ComponentFixture<LondonOvergroundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LondonOvergroundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LondonOvergroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

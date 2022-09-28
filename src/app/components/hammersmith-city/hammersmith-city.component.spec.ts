import { ComponentFixture, TestBed, waitForAsync as  } from '@angular/core/testing';

import { HammersmithCityComponent } from './hammersmith-city.component';

describe('HammersmithCityComponent', () => {
  let component: HammersmithCityComponent;
  let fixture: ComponentFixture<HammersmithCityComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HammersmithCityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HammersmithCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

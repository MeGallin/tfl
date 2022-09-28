import { ComponentFixture, TestBed, waitForAsync as  } from '@angular/core/testing';

import { WaterlooCityComponent } from './waterloo-city.component';

describe('WaterlooCityComponent', () => {
  let component: WaterlooCityComponent;
  let fixture: ComponentFixture<WaterlooCityComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ WaterlooCityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WaterlooCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

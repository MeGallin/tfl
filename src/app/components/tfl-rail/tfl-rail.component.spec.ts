import { ComponentFixture, TestBed, waitForAsync as  } from '@angular/core/testing';

import { TflRailComponent } from './tfl-rail.component';

describe('TflRailComponent', () => {
  let component: TflRailComponent;
  let fixture: ComponentFixture<TflRailComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TflRailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TflRailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

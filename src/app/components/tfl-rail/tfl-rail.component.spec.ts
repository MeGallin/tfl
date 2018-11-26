import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TflRailComponent } from './tfl-rail.component';

describe('TflRailComponent', () => {
  let component: TflRailComponent;
  let fixture: ComponentFixture<TflRailComponent>;

  beforeEach(async(() => {
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

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MetropolitanComponent } from './metropolitan.component';

describe('MetropolitanComponent', () => {
  let component: MetropolitanComponent;
  let fixture: ComponentFixture<MetropolitanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MetropolitanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MetropolitanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

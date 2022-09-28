import { ComponentFixture, TestBed, waitForAsync as  } from '@angular/core/testing';

import { PiccadillyComponent } from './piccadilly.component';

describe('PiccadillyComponent', () => {
  let component: PiccadillyComponent;
  let fixture: ComponentFixture<PiccadillyComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PiccadillyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PiccadillyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

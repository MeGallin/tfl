import { ComponentFixture, TestBed, waitForAsync as  } from '@angular/core/testing';

import { JubileeComponent } from './jubilee.component';

describe('JubileeComponent', () => {
  let component: JubileeComponent;
  let fixture: ComponentFixture<JubileeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ JubileeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JubileeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

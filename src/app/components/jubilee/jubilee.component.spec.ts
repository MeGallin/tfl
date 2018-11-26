import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JubileeComponent } from './jubilee.component';

describe('JubileeComponent', () => {
  let component: JubileeComponent;
  let fixture: ComponentFixture<JubileeComponent>;

  beforeEach(async(() => {
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

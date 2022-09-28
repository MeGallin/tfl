import { ComponentFixture, TestBed, waitForAsync as  } from '@angular/core/testing';

import { VictoriaComponent } from './victoria.component';

describe('VictoriaComponent', () => {
  let component: VictoriaComponent;
  let fixture: ComponentFixture<VictoriaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ VictoriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VictoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

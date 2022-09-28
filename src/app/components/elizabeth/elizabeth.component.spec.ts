import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElizabethComponent } from './elizabeth.component';

describe('ElizabethComponent', () => {
  let component: ElizabethComponent;
  let fixture: ComponentFixture<ElizabethComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElizabethComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElizabethComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

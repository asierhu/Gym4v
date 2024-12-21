import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityPopUpComponent } from './activity-pop-up.component';

describe('ActivityPopUpComponent', () => {
  let component: ActivityPopUpComponent;
  let fixture: ComponentFixture<ActivityPopUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActivityPopUpComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActivityPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

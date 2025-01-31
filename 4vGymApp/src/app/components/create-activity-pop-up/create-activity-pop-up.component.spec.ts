import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateActivityPopUpComponent } from './create-activity-pop-up.component';

describe('CreateActivityPopUpComponent', () => {
  let component: CreateActivityPopUpComponent;
  let fixture: ComponentFixture<CreateActivityPopUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateActivityPopUpComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateActivityPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

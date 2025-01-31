import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditActivityPopUpComponent } from './edit-activity-pop-up.component';

describe('EditActivityPopUpComponent', () => {
  let component: EditActivityPopUpComponent;
  let fixture: ComponentFixture<EditActivityPopUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditActivityPopUpComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditActivityPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitorPopUpComponent } from './monitor-pop-up.component';

describe('MonitorPopUpComponent', () => {
  let component: MonitorPopUpComponent;
  let fixture: ComponentFixture<MonitorPopUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MonitorPopUpComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonitorPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchMonitorComponent } from './search-monitor.component';

describe('SearchMonitorComponent', () => {
  let component: SearchMonitorComponent;
  let fixture: ComponentFixture<SearchMonitorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchMonitorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchMonitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

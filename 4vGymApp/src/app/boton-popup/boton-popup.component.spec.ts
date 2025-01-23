import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonPopupComponent } from './boton-popup.component';

describe('BotonPopupComponent', () => {
  let component: BotonPopupComponent;
  let fixture: ComponentFixture<BotonPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BotonPopupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotonPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

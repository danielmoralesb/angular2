import { ComponentFixture, TestBed } from '@angular/core/testing';

import { successAlertComponent } from './success-alert.component';

describe('successAlertComponent', () => {
  let component: successAlertComponent;
  let fixture: ComponentFixture<successAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [successAlertComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(successAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

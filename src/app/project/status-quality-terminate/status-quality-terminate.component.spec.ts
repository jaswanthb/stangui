import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusQualityTerminateComponent } from './status-quality-terminate.component';

describe('StatusQualityTerminateComponent', () => {
  let component: StatusQualityTerminateComponent;
  let fixture: ComponentFixture<StatusQualityTerminateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatusQualityTerminateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusQualityTerminateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

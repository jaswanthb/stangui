import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusTerminateComponent } from './status-terminate.component';

describe('StatusTerminateComponent', () => {
  let component: StatusTerminateComponent;
  let fixture: ComponentFixture<StatusTerminateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatusTerminateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusTerminateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

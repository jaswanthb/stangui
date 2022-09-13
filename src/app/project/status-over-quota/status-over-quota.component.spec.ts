import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusOverQuotaComponent } from './status-over-quota.component';

describe('StatusOverQuotaComponent', () => {
  let component: StatusOverQuotaComponent;
  let fixture: ComponentFixture<StatusOverQuotaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatusOverQuotaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusOverQuotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

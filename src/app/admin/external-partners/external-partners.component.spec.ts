import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExternalPartnersComponent } from './external-partners.component';

describe('ExternalPartnersComponent', () => {
  let component: ExternalPartnersComponent;
  let fixture: ComponentFixture<ExternalPartnersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExternalPartnersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExternalPartnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

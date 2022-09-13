import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorscreatenewComponent } from './vendorscreatenew.component';

describe('VendorscreatenewComponent', () => {
  let component: VendorscreatenewComponent;
  let fixture: ComponentFixture<VendorscreatenewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendorscreatenewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorscreatenewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

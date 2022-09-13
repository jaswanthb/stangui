import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingpagenewComponent } from './landingpagenew.component';

describe('LandingpagenewComponent', () => {
  let component: LandingpagenewComponent;
  let fixture: ComponentFixture<LandingpagenewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingpagenewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingpagenewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

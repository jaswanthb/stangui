import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportuidComponent } from './importuid.component';

describe('ImportuidComponent', () => {
  let component: ImportuidComponent;
  let fixture: ComponentFixture<ImportuidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImportuidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportuidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

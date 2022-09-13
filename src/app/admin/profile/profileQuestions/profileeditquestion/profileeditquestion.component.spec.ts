import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileeditquestionComponent } from './profileeditquestion.component';

describe('ProfileeditquestionComponent', () => {
  let component: ProfileeditquestionComponent;
  let fixture: ComponentFixture<ProfileeditquestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileeditquestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileeditquestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

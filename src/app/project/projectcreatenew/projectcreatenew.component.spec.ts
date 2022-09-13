import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectcreatenewComponent } from './projectcreatenew.component';

describe('ProjectcreatenewComponent', () => {
  let component: ProjectcreatenewComponent;
  let fixture: ComponentFixture<ProjectcreatenewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectcreatenewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectcreatenewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

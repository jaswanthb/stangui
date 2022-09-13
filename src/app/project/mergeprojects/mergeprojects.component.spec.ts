import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MergeprojectsComponent } from './mergeprojects.component';

describe('MergeprojectsComponent', () => {
  let component: MergeprojectsComponent;
  let fixture: ComponentFixture<MergeprojectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MergeprojectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MergeprojectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

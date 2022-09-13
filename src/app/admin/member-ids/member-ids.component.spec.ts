import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberIdsComponent } from './member-ids.component';

describe('MemberIdsComponent', () => {
  let component: MemberIdsComponent;
  let fixture: ComponentFixture<MemberIdsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemberIdsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberIdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

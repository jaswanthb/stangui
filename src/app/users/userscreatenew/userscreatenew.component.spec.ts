import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserscreatenewComponent } from './userscreatenew.component';

describe('UserscreatenewComponent', () => {
  let component: UserscreatenewComponent;
  let fixture: ComponentFixture<UserscreatenewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserscreatenewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserscreatenewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

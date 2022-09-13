import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatuscompleteComponent } from './statuscomplete.component';

describe('StatuscompleteComponent', () => {
  let component: StatuscompleteComponent;
  let fixture: ComponentFixture<StatuscompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatuscompleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatuscompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

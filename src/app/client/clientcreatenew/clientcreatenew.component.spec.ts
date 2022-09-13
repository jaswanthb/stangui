import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientcreatenewComponent } from './clientcreatenew.component';

describe('ClientcreatenewComponent', () => {
  let component: ClientcreatenewComponent;
  let fixture: ComponentFixture<ClientcreatenewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientcreatenewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientcreatenewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

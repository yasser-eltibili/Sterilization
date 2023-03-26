import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Primary3Component } from './primary3.component';

describe('Primary3Component', () => {
  let component: Primary3Component;
  let fixture: ComponentFixture<Primary3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Primary3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Primary3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

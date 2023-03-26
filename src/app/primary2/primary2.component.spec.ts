import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Primary2Component } from './primary2.component';

describe('Primary2Component', () => {
  let component: Primary2Component;
  let fixture: ComponentFixture<Primary2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Primary2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Primary2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Primary1Component } from './primary1.component';

describe('Primary1Component', () => {
  let component: Primary1Component;
  let fixture: ComponentFixture<Primary1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Primary1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Primary1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

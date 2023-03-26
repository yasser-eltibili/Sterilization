import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Secondary7Component } from './secondary7.component';

describe('Secondary7Component', () => {
  let component: Secondary7Component;
  let fixture: ComponentFixture<Secondary7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Secondary7Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Secondary7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

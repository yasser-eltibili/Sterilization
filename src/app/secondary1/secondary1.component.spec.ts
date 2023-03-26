import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Secondary1Component } from './secondary1.component';

describe('Secondary1Component', () => {
  let component: Secondary1Component;
  let fixture: ComponentFixture<Secondary1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Secondary1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Secondary1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

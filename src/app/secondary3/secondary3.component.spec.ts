import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Secondary3Component } from './secondary3.component';

describe('Secondary3Component', () => {
  let component: Secondary3Component;
  let fixture: ComponentFixture<Secondary3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Secondary3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Secondary3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

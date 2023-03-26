import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Secondary8Component } from './secondary8.component';

describe('Secondary8Component', () => {
  let component: Secondary8Component;
  let fixture: ComponentFixture<Secondary8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Secondary8Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Secondary8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

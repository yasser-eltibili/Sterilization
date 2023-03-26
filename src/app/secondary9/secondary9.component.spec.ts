import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Secondary9Component } from './secondary9.component';

describe('Secondary9Component', () => {
  let component: Secondary9Component;
  let fixture: ComponentFixture<Secondary9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Secondary9Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Secondary9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

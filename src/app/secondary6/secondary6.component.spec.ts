import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Secondary6Component } from './secondary6.component';

describe('Secondary6Component', () => {
  let component: Secondary6Component;
  let fixture: ComponentFixture<Secondary6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Secondary6Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Secondary6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Secondary5Component } from './secondary5.component';

describe('Secondary5Component', () => {
  let component: Secondary5Component;
  let fixture: ComponentFixture<Secondary5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Secondary5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Secondary5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

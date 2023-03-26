import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Secondary2Component } from './secondary2.component';

describe('Secondary2Component', () => {
  let component: Secondary2Component;
  let fixture: ComponentFixture<Secondary2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Secondary2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Secondary2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

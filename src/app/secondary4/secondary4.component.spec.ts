import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Secondary4Component } from './secondary4.component';

describe('Secondary4Component', () => {
  let component: Secondary4Component;
  let fixture: ComponentFixture<Secondary4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Secondary4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Secondary4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

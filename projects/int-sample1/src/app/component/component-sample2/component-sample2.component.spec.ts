import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentSample2Component } from './component-sample2.component';

describe('ComponentSample2Component', () => {
  let component: ComponentSample2Component;
  let fixture: ComponentFixture<ComponentSample2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentSample2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentSample2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

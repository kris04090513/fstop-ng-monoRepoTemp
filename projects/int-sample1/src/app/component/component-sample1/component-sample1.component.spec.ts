import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentSample1Component } from './component-sample1.component';

describe('ComponentSample1Component', () => {
  let component: ComponentSample1Component;
  let fixture: ComponentFixture<ComponentSample1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentSample1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentSample1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

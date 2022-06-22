import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibCommonComponent } from './lib-common.component';

describe('LibCommonComponent', () => {
  let component: LibCommonComponent;
  let fixture: ComponentFixture<LibCommonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibCommonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LibCommonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

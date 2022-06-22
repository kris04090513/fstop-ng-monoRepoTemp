import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibApiComponent } from './lib-api.component';

describe('LibApiComponent', () => {
  let component: LibApiComponent;
  let fixture: ComponentFixture<LibApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibApiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LibApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

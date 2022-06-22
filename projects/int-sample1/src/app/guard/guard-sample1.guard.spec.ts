import { TestBed } from '@angular/core/testing';

import { GuardSample1Guard } from './guard-sample1.guard';

describe('GuardSample1Guard', () => {
  let guard: GuardSample1Guard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GuardSample1Guard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

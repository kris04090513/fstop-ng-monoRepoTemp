import { TestBed } from '@angular/core/testing';

import { LibCommonService } from './lib-common.service';

describe('LibCommonService', () => {
  let service: LibCommonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibCommonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

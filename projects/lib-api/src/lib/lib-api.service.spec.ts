import { TestBed } from '@angular/core/testing';

import { LibApiService } from './lib-api.service';

describe('LibApiService', () => {
  let service: LibApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

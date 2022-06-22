import { TestBed } from '@angular/core/testing';

import { ServiceSample1Service } from './service-sample1.service';

describe('ServiceSample1Service', () => {
  let service: ServiceSample1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceSample1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

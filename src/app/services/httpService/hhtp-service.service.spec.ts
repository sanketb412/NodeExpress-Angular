import { TestBed } from '@angular/core/testing';

import { HhtpServiceService } from './hhtp-service.service';

describe('HhtpServiceService', () => {
  let service: HhtpServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HhtpServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

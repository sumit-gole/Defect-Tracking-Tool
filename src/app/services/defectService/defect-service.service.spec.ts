import { TestBed } from '@angular/core/testing';

import { DefectServiceService } from './defect-service.service';

describe('DefectServiceService', () => {
  let service: DefectServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DefectServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

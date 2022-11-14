import { TestBed } from '@angular/core/testing';

import { DbstopplaceService } from './dbstopplace.service';

describe('DbstopplaceService', () => {
  let service: DbstopplaceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DbstopplaceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { FurnishUpDataService } from './furnish-up-data.service';

describe('FurnishUpDataService', () => {
  let service: FurnishUpDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FurnishUpDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

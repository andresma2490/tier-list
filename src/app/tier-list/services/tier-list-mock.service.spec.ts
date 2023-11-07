import { TestBed } from '@angular/core/testing';

import { TierListMockService } from './tier-list-mock.service';

describe('TierListMockService', () => {
  let service: TierListMockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TierListMockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

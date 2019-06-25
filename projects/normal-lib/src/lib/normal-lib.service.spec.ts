import { TestBed } from '@angular/core/testing';

import { NormalLibService } from './normal-lib.service';

describe('NormalLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NormalLibService = TestBed.get(NormalLibService);
    expect(service).toBeTruthy();
  });
});

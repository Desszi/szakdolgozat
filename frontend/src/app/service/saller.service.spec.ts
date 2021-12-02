import { TestBed } from '@angular/core/testing';

import { SallerService } from './saller.service';

describe('SallerService', () => {
  let service: SallerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SallerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

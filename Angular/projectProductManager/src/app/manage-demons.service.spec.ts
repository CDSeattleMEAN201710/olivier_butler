import { TestBed, inject } from '@angular/core/testing';

import { ManageDemonsService } from './manage-demons.service';

describe('ManageDemonsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ManageDemonsService]
    });
  });

  it('should be created', inject([ManageDemonsService], (service: ManageDemonsService) => {
    expect(service).toBeTruthy();
  }));
});

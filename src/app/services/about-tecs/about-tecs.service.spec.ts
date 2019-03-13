import { TestBed } from '@angular/core/testing';

import { AboutTecsService } from './about-tecs.service';

describe('AboutTecsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AboutTecsService = TestBed.get(AboutTecsService);
    expect(service).toBeTruthy();
  });
});

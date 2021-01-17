import { TestBed } from '@angular/core/testing';

import { EscuelaDigitalService } from './escuela-digital.service';

describe('EscuelaDigitalService', () => {
  let service: EscuelaDigitalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EscuelaDigitalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

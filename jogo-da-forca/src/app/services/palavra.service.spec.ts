import { TestBed } from '@angular/core/testing';

import { PalavraService } from './palavra.service';

describe('PalavraService', () => {
  let service: PalavraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PalavraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

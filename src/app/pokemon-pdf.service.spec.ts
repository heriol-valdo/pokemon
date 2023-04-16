import { TestBed } from '@angular/core/testing';

import { PokemonPdfService } from './pokemon-pdf.service';

describe('PokemonPdfService', () => {
  let service: PokemonPdfService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokemonPdfService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
